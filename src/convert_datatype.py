from bs4 import BeautifulSoup as soup
import requests
import mysql.connector
import psycopg2
import time
import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["new-db"] ## database adi
mycol = mydb["complete_players"] ## dokumanlar listesi? adi



myquery = {}

mydoc = mycol.find(myquery)

for x in mydoc:
  print(type(x["base_card_id"]))
