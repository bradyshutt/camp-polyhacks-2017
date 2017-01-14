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
      return jsonify(resDict)

   def Authentication(self, email, password):
      query = "SELECT * FROM Users WHERE email = %s AND password = %s"
      self.cur.execute(query, (email, password,))
      res = self.cur.fetchall()
      if len(res) == 0:
         return False
      return True
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
              completed
               FROM Users Riders JOIN 
                (SELECT * 
                   FROM Users Drivers JOIN 
                      RideRequests R 
                      ON R.driverId = Drivers.id) RD 
                   ON Riders.id = RD.riderId WHERE Riders.email = %s;"""
      self.cur.execute(query, (email,))
      res = self.cur.fetchall()
      if len(res) == 0:
         return jsonify({'code':404,'message':'No requests found'})
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

   def NewUser(self, email, password, fname, lname):
      query = "SELECT * FROM Users WHERE email = %s"
      self.cur.execute(query, (email,))
      res = self.cur.fetchall()
      # User with email already exists
      if (len(res) != 0):
         return jsonify({'code':404,'message':'Username not found'})
      # User does not yet exist
      self.cur.execute("START TRANSACTION;")
      query = "INSERT INTO Users VALUES (NULL, %s, %s, %s, %s, NULL, NULL, NULL);"
      self.cur.execute(query, (email, fname, lname, password,))
      self.cur.execute("COMMIT;")
      return "Success"l

   def NewRequest(self, riderEmail, driverEmail, fromAddress, toAddress):
      query = "SELECT id FROM Users WHERE email = %s;"
      self.cur.execute(query, (riderEmail,))
      riderId = self.cur.fetchall()[0][0]
      self.cur.execute(query, (driverEmail,))
      driverId = self.cur.fetchall()[0][0]
      self.cur.execute("START TRANSACTION;")
      query = "INSERT INTO RideRequests VALUES (NULL, %s, %s, NOW(), %s, %s, 1000, 'y');"
      self.cur.execute(query, (riderId, driverId, fromAddress, toAddress,))
      self.cur.execute("COMMIT;")

   # def UpdatePrice(self, newPrice, requestNum):
   #    query = "UPDATE RideRequests SET price = %s WHERE rideId = %s;"
   #    self.cur.execute(query, (newPrice, requestNum,))
