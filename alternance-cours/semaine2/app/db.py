# File to connect to the database
import mysql.connector

mydb = mysql.connector.connect(
  host="mysql_db",
  user="root",
  password="root"
)

mycursor = mydb.cursor()
# mycursor.execute("USE mysql")
# mycursor.execute("SELECT * FROM user")

myresult = mycursor.fetchall()