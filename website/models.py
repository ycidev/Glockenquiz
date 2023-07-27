from . import db
from sqlalchemy.sql import func

class Score(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(150))
    score = db.Column(db.Integer())