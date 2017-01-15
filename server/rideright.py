# Flask file
# Sigal Shaul
# Ashley Newman
# January 14, 2017

from flask import Flask, request, url_for
from queries import *

db = Database()

app = Flask(__name__)

@app.route("/", methods=['GET'])
def index():
   return "RideRight API"

@app.route("/user/<email>", methods=['GET'])
def user(email):
   res = db.UserInfo(email)
   return res

@app.route("/request/<email>", methods=['GET'])
def findRequest(email):
   res = db.RideRequestsFromEmail(email)
   return res

@app.route("/newuser", methods=['GET'])
def newuser():
   email = request.args.get('email')
   password = request.args.get('password')
   fname = request.args.get('fname')
   lname = request.args.get('lname')
   return db.NewUser(email, password, fname, lname)

# @app.route("/newrequest", methods=['POST'])
# def newrequest():
#    riderId = request.json['riderId']
#    driverId = request.json['driverId']
#    fromAddress = request.json['fromAddress']
#    toAddress = request.json['toAddress']
#    return db.NewRequest(riderId, driverId, fromAddress, toAddress)

@app.route("/authentication", methods=['GET'])
def authentication():
   return str(db.Authentication(request.args.get("email"), request.args.get("password")))

if __name__ == "main":
   app.run()