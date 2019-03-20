import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import * as actions from '../actions';
//import socketIOClient from "socket.io-client";
//const { WebSocket } = require("uws");
//const ws = new WebSocket("ws://localhost:3000/");

class Header extends Component {

//  constructor() {
//    super();
//    this.state = {
//      response: false,
//      endpoint: "http://127.0.0.1:5001"
//    };
//  }
    
    componentDidMount(){
        this.props.fetchUser();
//        if(this.props.auth)
//            console.log("user:", this.props.auth.name.givenName);
//        const { endpoint } = this.state;
//        console.log("endpoint", endpoint);
//        const io = socketIOClient(endpoint);
//          console.log("io", io);
//          //console.log("socketIOClient", socketIOClient);
//        
//        io.on('connect', () => {
//            io.emit('tweet', "hello frmo client");
//            console.log("reached in");
//        });

    }
    
   

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Login</a></li>
                );
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key="3" style={{ margin: '0 10px' }}> {this.props.auth.name.givenName} Credits: {this.props.auth.credits}</li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
                    //console.log("socket: ", WebSocket);
                    // socket connection to server for checking online users status
                  //   ws.on('open', () => {
                  //     console.log("client successfully connected to server");
                  //     ws.send('hello im client' + his.props.auth.name.givenName);
                  //     ws.on('message', (message) => {
                  //         console.log("Server: ", message);
                  //
                  //     });
                  // });
                ];
        }
    }
    render() {
        return (
            <nav>
              <div className="nav-wrapper deep-orange accent-4">
                <div className="left brand-logo">
                    <Link
                       to={this.props.auth ? '/dashboard' : '/'}> test</Link>
                </div>

                <ul className="right">
                    {this.renderContent()}
                </ul>
              </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    //console.log("props user:", auth);
    return { auth };
}
export default connect(mapStateToProps, actions)(Header);
