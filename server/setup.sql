DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS RideRequests;

CREATE TABLE Users (
   id INTEGER AUTO_INCREMENT PRIMARY KEY,
   email VARCHAR(32) NOT NULL,
   fname VARCHAR(32) NOT NULL,
   lname VARCHAR(32) NOT NULL,
   password VARCHAR(32) NOT NULL,
   token VARCHAR(64) DEFAULT NULL,
   picture VARCHAR(32) DEFAULT NULL,
   role VARCHAR(8) DEFAULT NULL
);

CREATE TABLE RideRequests (
   riderId INTEGER NOT NULL,
   driverId INTEGER NOT NULL,
   requestTime DATETIME NOT NULL,
   fromAddress VARCHAR(64) DEFAULT NULL,
   toAddress VARCHAR(64) DEFAULT NULL,
   price INTEGER DEFAULT 1000,              -- in cents
   completed CHAR(1) DEFAULT 'n',          -- 'y' or 'n'
   PRIMARY KEY(riderId, driverId)
);
