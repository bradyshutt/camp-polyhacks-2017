from queries import *

db = Database()

print db.NewRequest("email1", "email2", "from", "to")
