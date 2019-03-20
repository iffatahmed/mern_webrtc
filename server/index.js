const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const http = require("http");
const cors = require('cors');
//import WebSocketServer, {Server} from 'uws';
//const { WebSocketServer } = require("uws");
//const { Server } = require("uws");
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const keys = require('./config/keys.js');
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();



app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys:[keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/usersRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const server = http.createServer(app);
console.log("server created");

// app.wss = new Server({
// 	server: app.server
// });



// app.wss.on('connection', (connection) => {
//     const userId = clients.length + 1;
//     connection.userId = userId;
//     const newClient = {
//         ws: connection,
//         userId: userId
//     };
//
//     clients.push(newClient);
//     console.log("New client cnctd with userId: ", userId);
//     connection.on('message', (message) => {
//
//     });
//
//     connection.on('close', () => {
//         console.log("Client disconnected");
//     });
// });

const io = socketIo(server);
console.log("io created");
var userFound = false;
let onlineClients = [];
console.log("initial onlineClients: ", onlineClients);
//var allConnectedClients = Object.keys(io.sockets.connected);
io.on("connection", function(socket) {
    
      socket.on("registerUser", function(uId) {
        if(onlineClients.length>=1) {
            console.log("reached here");
             userFound = false;
             for( var i = 0; i <onlineClients.length-1; i++){   
              if(onlineClients[i].userId === uId) {
                  userFound = true;
                  onlineClients.splice(i, 1); 
                  //onlineClients[i].socketId = socket.id;
                  //console.log("onlineClients[i].userId: ", onlineClients[i].userId);
                  console.log("client already connected with socketId: ", socket.id);
                  console.log("now...", onlineClients);
              }
            }           
        }
        if(!userFound) {
            console.log("New client connected");
            console.log("client", socket.id);
            const newClient = {
            socketId: socket.id,
            userId: uId
            };
            onlineClients.push(newClient);
        }
console.log("and now...", onlineClients);
            //console.log("tweet", tweet);
          //console.log("onlineClients: ", onlineClients);
          //console.log("allConnectedClients: ", allConnectedClients);
        });
//        socket.on('getUserList', () => {
//            socket.emit('getUserList',onlineClients);
//            console.log("sending...", onlineClients);
//        });
        setInterval(() => getUsersAndEmit(socket), 10000);
        socket.on("disconnect", () => {
            console.log("Client disconnected ", socket.id);
            socket.disconnect();
            
            for( var i = 0; i < onlineClients.length-1; i++){ 
               console.log("onlineClients[i].socketId: ", onlineClients[i].userId);
               if ( onlineClients[i].socketId === socket.id) {
                   console.log("This socket disconnected: ", socket.id);
                   onlineClients.splice(i, 1); 
                   
               }
            }
            console.log(" now onlineClients: ", onlineClients);
            //console.log("allConnectedClients: ", allConnectedClients);
        });
    });

const getUsersAndEmit = async cur_socket => {
  try {
    const res = onlineClients;
    cur_socket.emit("getUserList", onlineClients);
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};
/**/
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.info('Server Listening to port %d', PORT);

});



//io.clients((error, clients) => {
//  if (error) throw error;
//  console.log("clients are", clients);
//});
