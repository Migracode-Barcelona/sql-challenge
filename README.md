# MigraCode PostgreSQL + Node.js space 🛰

Here's an empty space with a PostgreSQL database and Node.js set up and connected together. 

There is a database called ```db_name``` already created with the username ```postgres```, password ```postgres```, host ```db``` and port ```5432```.


## To access the PostgreSQL database enter the following command in the terminal:
```
psql -U postgres -h db -d db_name
```

## To see the tables and execute queries in a more user-friendly way, follow these steps to activate the database VSCode extension: 
* Click the database logo on the left sidebar and click "Add New Connection"
* Select PostgreSQL. For connection name type ```db```, for database type ```db_name```, for username type ```postgres```.
* Click "Save connection" and "Connect now". If a password is asked, type ```postgres```.
* To see the tables expand the "Connections" folder in the SQLTOOLS tab on the left. To execute queries go to any ```.sql``` file, type in your queries and click "Run on active connection" (or select and right click to execute a single query).

## To run the Node.js application:
```
npm install; npm start
```
