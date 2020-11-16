
import random
import os
import pymongo
from pymongo import MongoClient

def my_view():
    # database connnection
    try: 
        client = pymongo.MongoClient('mongodb://schiebs:pZsxv0MKYZ4fhOMZ@cluster0-shard-00-00.025ux.mongodb.net:27017,cluster0-shard-00-01.025ux.mongodb.net:27017,cluster0-shard-00-02.025ux.mongodb.net:27017/MongoDB-Atlas?ssl=true&replicaSet=atlas-av4vev-shard-0&authSource=admin&retryWrites=true&w=majority')
        print("Connected successfully!")
    except:
        print("Could not connect to mongoDB")
    db = client.statdb
    collection = db.status

    dir = r"C:\Users\Ally\zclone\create-react-app-auth-amplify\amplify\backend\imageProcessing\images"
    image = random.choice(os.listdir(dir))

    camera = image[0 : 6]
    date = image[7 : 16]
    time = image[18 : 25]
    # stat = callfunc()

    statusDocument = {
        "camera": camera,
        "date": date,
        "time": time
    }

    # Insert Data
    s_id = collection.insert_one(statusDocument)

    # Printing the data inserted 
    cursor = collection.find() 
    for record in cursor: 
        print(record) 

if __name__ == "__main__":
    my_view()





#pullPhoto will create status and will post to database
#notifications will pull status info whenever status is true 
#Dashboard will pull mare, date, time, status
#Dashboard will be able to create logs for status 
#"Mare in: " + camera + "Was marked " + status + "at: " + time
