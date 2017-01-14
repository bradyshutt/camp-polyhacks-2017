# Flask file
# Sigal Shaul
# Ashley Newman
# January 14, 2017

from flask import Flask, url_for, redirect
from queries import *

app = Flask(__name__)

@app.route("/")
def index():
   return "RightRides api page."

@app.route("/user/<email>")
def user(email):
   res = queries.UserInfo(email)
   return res

if __name__ == "main":
   app.run()