import random
import os
import pymongo
from pymongo import MongoClient

def my_view():
    # database connnection
    try: 
        client = pymongo.MongoClient('mongodb://schiebs:XXXXXXXXX@cluster0-shard-00-00.nzdh9.mongodb.net:27017,cluster0-shard-00-01.nzdh9.mongodb.net:27017,cluster0-shard-00-02.nzdh9.mongodb.net:27017/maredb?ssl=true&replicaSet=atlas-12hqas-shard-0&authSource=admin&retryWrites=true&w=majority')
        print("Connected successfully!")
    except:
        print("Could not connect to mongoDB")
    db = client.maredb
    collection = db.mares

    dir = r"C:\Users\Ally\zclone\create-react-app-auth-amplify\amplify\backend\imageProcessing\images"
    image = random.choice(os.listdir(dir))
    # Assign random label based on image query
    statusOps = ["Laying down", "Standing", "Pacing"]
    nameOps = ["Sassy", "Belle", "Rachel", "Rhiannon", "Jewel"]

    name = random.choice(nameOps)
    camera = image[0 : 6]
    date = image[7 : 16]
    time = image[18 : 25]
    stat = random.choice(statusOps)

    statusDocument = {
        "name": name,
        "camera": camera,
        "date": date,
        "time": time,
        "stat": stat
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
