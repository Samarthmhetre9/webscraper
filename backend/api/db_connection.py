import pymongo

url = 'mongodb+srv://varad:v1r140016@pricewise.kfsw9vd.mongodb.net/?retryWrites=true&w=majority'

client = pymongo.MongoClient(url)

db = client['test_mongo']