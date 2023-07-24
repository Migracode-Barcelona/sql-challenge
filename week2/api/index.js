const express = require('express')
const app = express()
const port = 3001

const { Pool } = require("pg")

const db = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'db',
  port: 5432,
  database: 'cyf_ecommerce' // make sure you have created the database before running this app 
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
