const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const server = express();
const mysql = require('mysql');
const mysql_creds = require('./config/mysql_creds');
const db = mysql.createConnection(mysql_creds);


server.use(express.static(__dirname + '/'));
server.use(express.json());
server.use(express.urlencoded({
    extended: true
}));
server.use(cors());


server.post("/SignUp", (request, response) => {
    console.log("sign up");
    console.log("request: ", request.body);

    const { email, password} = request.body;

    db.connect(()=> {
        console.log('CONNECT');
        const query = "SELECT * FROM accounts WHERE accountEmail = "+email+"";
    });

    response.send({success: true});
});

server.listen(7777, () => {
    console.log('server operational');
});