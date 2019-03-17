const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const server = express();
const mysql = require('mysql');
const mysql_creds = require('./config/mysql_creds.js');
const db = mysql.createConnection(mysql_creds);
const passwordHash = require('sha256');


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

        const query = "SELECT * FROM accounts AS a WHERE a.accountEmail = '"+email+"'";

        db.query(query, (error, data)=> {
            if (data.length > 0) {
                let output = {
                    success: false,
                    error: 'Account Already Exists'
                }
                response.send(output)

            } else {
                
                const query = "INSERT INTO accounts SET accountEmail = '"+email+"', password = '"+passwordHash(password)+"' "
                console.log("INSERT QUERY", query);
                db.query(query, (error, data) => {

                    if (!error) {
                        let output = {
                            success: true
                        }

                        response.send(output);
                    } else {
                        let output = {
                            success: false,
                            error: error
                        }

                        response.send(output);
                    }
                })
                
            }
            

        });

    });

});

server.get('/SignUp2',(request, response)=> {
    db.connect(()=> {
        const query = "SELECT * FROM accounts";
        console.log("QUERY: ", query);
        
        db.query(query, (data, error)=> {
            if (error) {
                console.log('ERROR: ', error);
            } else {
                console.log('NO ERROR DATA: ', data);
            }
            // let output = {
            //     success: true,
            //     data: data,
            // }
            // response.send(output);
        });
    });
})

server.listen(7777, () => {
    console.log('server operational');
});

