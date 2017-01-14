# Flask file
# Sigal Shaul
# Ashley Newman
# January 14, 2017

from flask import Flask, url_for, redirect, request
from queries import *

db = Database()

app = Flask(__name__)

@app.route("/")
def index():
   return "RightRides api page."

@app.route("/user/<email>", methods=['GET'])
def user(email):
   res = db.UserInfo(email)
   return res

# @app.route("/request/<rID>"):
#    res = db.RequestInfo()
#    return res

# @app.route("/newuser", methods=['POST'])
# def newuser():
#    email = request.json['email']
#    password = request.json['password']
#    fname = request.json['fname']
#    lname = request.json['lname']
#    return db.NewUser(email, password, fname, lname)

# @app.route("/newrequest", methods=['POST'])
# def newrequest():
#    riderId = request.json['riderId']
#    driverId = request.json['driverId']
#    fromAddress = request.json['fromAddress']
#    toAddress = request.json['toAddress']
#    return db.NewRequest(riderId, driverId, fromAddress, toAddress)

# @app.route("/authentication", methods=['POST'])
# def authentication():
#    email = request.json['email']
#    password = request.json['password']
#    return db.Authentication(email, password)

if __name__ == "main":
   app.run()