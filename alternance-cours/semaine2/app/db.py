# File to connect to the database
import mysql.connector

mydb = mysql.connector.connect(
  host="mysql_db",
  user="root",
  password="root"
)

mycursor = mydb.cursor()

mycursor.execute("USE konexiocours")

mycursor.execute("SELECT promo, adresse, nom, prenom FROM apprenants")
apprenants = mycursor.fetchall()

mycursor.execute("SELECT adresse, nom FROM entreprises")
entreprises = mycursor.fetchall()

mycursor.close()
mydb.close()