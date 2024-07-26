'''
only for one-time usage, to populate my mongdb database, set up using Atlas
'''
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import requests

# a dummy data api, has 200 products' dummy data
all_products = requests.get("https://api.escuelajs.co/api/v1/products").json()
print(all_products)

# removed my mongoDB details
uri = '<client_uri>'


client = MongoClient(uri, server_api=ServerApi('1'))

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")

    # client.amazon.products.insert_many(all_products)
    print("Inserted product into the database")

except Exception as e:
    print(e)