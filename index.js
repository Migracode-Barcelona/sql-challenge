const express = require('express')
const app = express()
const port = 3000

const { Pool } = require("pg")

const db = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'db', // Use the hostname of the database container
  port: 5432,
  database: 'db_name'
});

db.query(`CREATE TABLE IF NOT EXISTS testing(id SERIAL PRIMARY KEY);`)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
