# Flask file
# Sigal Shaul
# Ashley Newman
# January 14, 2017

from flask import Flask, url_for, redirect
app = Flask(__name__)

@app.route("/", methods=['GET'])
def index():
	return "RightRides api page."



if __name__ == "main":
	app.run()