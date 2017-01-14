import MySQLdb
from flask import jsonify

# Database class
class Database:

   # Connect to database and create cursor.
   def __init__(self):
      self.db = MySQLdb.connect(host = "ajkprojects.com",
                                user = "client",
                                passwd = "polyhacks",
                                db = "RideRight")
      self.cur = self.db.cursor()

   def UserInfo(self, email):
      query = "SELECT * FROM Users WHERE email = %s;"
      self.cur.execute(query, (email,))
      res = self.cur.fetchall()
      if len(res) == 0:
         return jsonify({'code':404,'message':'Username not found'})
      resDict = {
         'id': res[0][0], 
         'email': res[0][1],
         'fname': res[0][2], 
         'lname': res[0][3],
         'password': res[0][4],
         'token': res[0][5],
         'picture': res[0][6],
         'role': res[0][7]
         }
      #return resDict
      return jsonify(resDict)

   def RideRequestsFromEmail(self, email):
      query = """SELECT 
              Riders.fName, 
              Riders.lName, 
              RD.fName,
              RD.lName,
              requestTime,
              fromAddress,
              toAddress,
              price,
              complete
               FROM Users Riders JOIN 
                (SELECT * 
                   FROM Users Drivers JOIN 
                      RideRequests R 
                      ON R.driverId = Drivers.id) RD 
                   ON Riders.id = RD.riderId WHERE Riders.email = %s;"""
      self.cur.execute(query, (email,))
      res = self.cur.fetchall()
      resDict = {
         'riderfName': res[0][0],
         'riderlName': res[0][1],
         'driverfName': res[0][2],
         'driverlName': res[0][3],
         'requestTime': res[0][4],
         'fromAddress': res[0][5],
         'toAddress': res[0][6],
         'price': res[0][7],
         'completed': res[0][8]
      }
      return jsonify(resDict)
