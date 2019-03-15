const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const server = express();


server.use(express.static(__dirname + '/'));
server.use(express.json());
server.use(express.urlencoded({
    extended: true
}));
server.use(cors());
// server.use((request, response, next)=>{
//     response.use('Access-Control-Allow-Origin', '*');
//     response.use('Access-Control-Allow-Headers', '*');
// });


server.post("/SignUp", (request, response) => {
    console.log("sign up");
    response.send({success: true});
});

server.listen(7777, () => {
    console.log('server operational');
});