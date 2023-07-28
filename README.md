# Glockenquiz
## Background:
At the last school festival my school cast its own copper bell. To raise funds to buy the motor and the frame to operate the bell, my teacher decided to set up an ice coffee stand at which he displayed the bell and provided additional information on the subject. I had the idea of a little game to raise some extra money.
## Description:
The Glockenquiz is  an audiovisual quiz where you listen to the sound of church bells from all over Europe and guess based on pictures (and luck) where the bell is located. In total you play 5 rounds each giving you a different sound and 4 different answer options to choose from. If you guessed 3 or more bells correctly you win. An additional score is calculated based on the time you needed to answer the questions (maximum time is the duration of the bell sound). Each participant has the chance to enter their name with the respective score in a leaderboard at the end.
It is a Python Flask web-app so in order to run it outside of the local development environment (say you want to play on a mobile device) it has to be deployed to a server.
## Disclaimer:
The whole project is mostly written in German since it was a project for my school's annual school festival. Because of the relatively short time I had for development, I had to use absolute styling to make sure that it would work on the devices we got provided from school. In fact it is currently only really optimized to use on a 2019 iPad in portrait mode. If I have some free time I definitely plan to make the app responsive to allow use on all platforms. Please keep all that information in mind when browsing this repo.
## Prerequisites:
- Python 3.x.x  
 	https://www.python.org/downloads/ 

- PIP package installer  
  https://pip.pypa.io/en/stable/installation/ 

- Some basic command line skills
## Installation:
First of all download the code from this github page and extract the zip to your local drive.
To run the game in your local development environment you need to install some Python packages. To do this simply navigate to the project folder on your system using the command line. From there type ```pip3 install -r requirements.txt``` after the installation finished you are good to go.
To run the application run the main.py file from either the command line (type ```python3 main.py``` in the project directory) or an IDE of your choice. Flask will start a local development server which you can access from your Browser at http://127.0.0.1:5000/. 

### Have fun!
