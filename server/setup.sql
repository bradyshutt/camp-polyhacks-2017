DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS RideRequests;

CREATE TABLE Users (
   id INTEGER PRIMARY KEY,
   email VARCHAR(32),
   password VARCHAR(32),
   token VARCHAR(64),
   picture VARCHAR(32),
   role VARCHAR(8)
);

CREATE TABLE RideRequests (
   riderId INTEGER,
   driverId INTEGER,
   requestTime DATETIME,
   fromAddress VARCHAR(64),
   toAddress VARCHAR(64),
   price INTEGER,              -- in cents
   completed CHAR(1),          -- 'y' or 'n'
   PRIMARY KEY(riderId, driverId)
);