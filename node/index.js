const express = require("express")
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sqlCreateTablePeople = 'CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id))'
connection.query(sqlCreateTablePeople)

const sql = `INSERT INTO people(name) VALUES('leonardo')`
connection.query(sql)

app.get('/', (req, res) => {
    connection.query('SELECT * FROM people', (error, results) => {
        if (error) {
            throw error
        }
        let html = `<h1>Full Cycle Rocks!</h1>`  
        results.forEach(people => {
            html += `<p>- ${people.name}</p>`
        });
        res.send(html)
    })
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})