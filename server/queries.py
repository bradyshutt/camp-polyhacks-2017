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
      print res
      # resDict = {
      #    'id': res[0], 
      #    'email': res[1], 
      #    'password': res[2],
      #    'token': res[3],
      #    'picture': res[4],
      #    'role': res[5]
      #    }
      # return jsonify(resDict)
