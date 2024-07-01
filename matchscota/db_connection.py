import pymongo

url = 'mongodb+srv://Camilo:Bn1GAcVpDVvovGq9@cluster0.catjgfv.mongodb.net/'
client = pymongo.MongoClient(url)

db = client['matchscota']
