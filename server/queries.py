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

   # def RideRequestsFromEmail(self, email):
      # query = "SELECT * FROM Users JOIN RideRequests ON Users.id = RideRequests.riderId WHERE email = %s;"
      # self.cur.execute(query, (email,))
      # res = self.cur.fetchall()
      # resDict = {
      #    ''
      # }
