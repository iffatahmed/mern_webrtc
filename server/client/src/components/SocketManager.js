//import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
//import Payments from './Payments';
//import * as actions from '../actions';
////import socketIOClient from "socket.io-client";
////const { WebSocket } = require("uws");
////const ws = new WebSocket("ws://localhost:3000/");
//
//class SocketManager extends Component {
//
//    // connect in constructor 
//      constructor() {
//        super();
//        this.state = {
//          userListOnline: false,
//          endpoint: "http://127.0.0.1:5003",
//            msg: ''
//        };
//          
//          
//          // connect 
//            if(!this.props.auth && newProps.auth)
//                console.log("user:", newProps.auth.name.givenName);
//             if(!io) {
//                const { endpoint } = this.state;
//                console.log("endpoint", endpoint);
//                io = socketIOClient(endpoint);
//                  console.log("io", io);
//                  console.log("io", io.connected);
//                  //console.log("socketIOClient", socketIOClient);
//
//                    io.on('connect', () => {
//                        io.emit('registerUser', newProps.auth.userId);
//                        connCheck = true;
//                      io.on("getUserList", data => {
//                        this.setState({ userListOnline: data });
//                        //console.log("userList: ", userListOnline);
//                      });
//                    });
//             }
//      }
//    
//    // all msg in
//    
//    // all msg out
//    
//    // msg listen
//    
//    // msg get
//    
//    // call redux actions here
//    
//    // component -> action -> socketmanager function -> emit to server
//    
//    // server -> socketmanager function -> action -> component
//    
//    
////  constructor() {
////    super();
////    this.state = {
////      response: false,
////      endpoint: "http://127.0.0.1:5001"
////    };
////  }
//    
//    componentDidMount(){
//        this.props.fetchUser();
//
//    }
//
//    renderContent() {
//        console.log("Socket manager user is:", this.props.auth.userId);
//
//        }
//    
//    render() {
//        return (
//            
//            <div>Here I am 
//                {this.renderContent()}
//            </div>
//        );
//    }
//}
//
//function mapStateToProps({ auth }) {
//    console.log("Socket manager user:", auth);
//    return { auth };
//}
//export default connect(mapStateToProps, actions)(SocketManager);
