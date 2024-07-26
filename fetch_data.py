'''
only for one-time usage, to populate my mongdb database, set up using Atlas
'''
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import requests

# a dummy data api, has 200 products' dummy data
all_products:list[dict] = requests.get("https://api.escuelajs.co/api/v1/products").json()
# Remove certain keys from each product
for product in all_products:
    if len(product["images"]) == 1:
        product["images"][0] = product['images'][0].strip('[').strip(']').strip('"')
    product["price"] = float("{:.2f}".format(product["price"]))
    product.pop('id', None)
    product.pop("category", None)
    product.pop("creationAt", None)
    product.pop("updatedAt", None)

print(all_products[0])
# removed my mongoDB details
uri = 'mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority'


client = MongoClient(uri, server_api=ServerApi('1'))

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
    client.amazon.product.drop()
    client.amazon.product.insert_many(all_products)
    print("Inserted product into the database")

except Exception as e:
    print(e)