from flask import Blueprint, render_template, request, redirect, url_for, session
from sqlalchemy import desc
from . import db
from .models import Score
import json
import random

views = Blueprint('views', __name__)

@views.route('/', methods=['GET', 'POST'])
def home():

    return render_template("home.html")

@views.route('/game', methods=['GET', 'POST'])
def game():
    tempData = json.load(open("website\static\database.json", encoding="UTF-8"))
    
    locations = []
    flags = []
    imgs = []
    round = []

    if request.method == "GET":
        session["index"] = 1
        session["score"] = {
                "rounds": 0,
                "points": 0
            }
        session["gameData"] = random.sample(tempData, 5)
        
    if request.method == "POST":
        if request.form.get("submitButton"):
            if int(request.form.get("submitButton")) == session["solution"]:
                session["score"]["points"] += int(1000*float(request.form.get("timer")))
                session["score"]["rounds"] += 1

        #nächste Runde
        if session["index"] < 5:
            session["index"] += 1
        else:
            session.modified = True
            return redirect(url_for("views.leaderboard", entry=True, **request.args))
    
    round.append(session["gameData"][session["index"]-1])
    tempData.remove(session["gameData"][session["index"]-1])
    for n in random.sample(tempData, 3): round.append(n) 
    random.shuffle(round)
    session["solution"] = round.index(session["gameData"][session["index"]-1])

    audio = session["gameData"][session["index"]-1]["audio"]
    for n in round: locations.append(n["location"])
    for n in round: flags.append(n["flag"])
    for n in round: imgs.append(n["img"])
    
    session.modified = True
    return render_template("game.html", index=session["index"], locations=locations, flags=flags, imgs=imgs, audio=audio)

@views.route('/leaderboard', methods=['GET', 'POST'])
def leaderboard():
    if request.method == "POST":
        if request.form.get("name") == "":
            name = "Unbekannte Legende"  
        else:
            name = request.form.get("name")
        score = Score(name=name, score=session["score"]["points"])
        
        db.session.add(score)
        db.session.commit()

    leader = []
    query = Score.query.order_by(desc(Score.score)).limit(10).all()
    for row in query:
        leader.append((row.name, row.score))

    if request.args.get("entry"):
        points = session["score"]["points"]
        rounds = session["score"]["rounds"]
    else:
        points = 0
        rounds = 0

    return render_template("leaderboard.html", points=points, rounds=rounds, entry=request.args.get("entry"), leader=leader, leaderLen=len(leader))