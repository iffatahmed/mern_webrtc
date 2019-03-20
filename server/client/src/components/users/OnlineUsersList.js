import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import socketIOClient from "socket.io-client";
const loginStatus = "Online";
let io='';
var connCheck = false;
const PORT = process.env.PORT || 5000;
//const url = "https://epitch2.herokuapp.com:"+PORT || "http://127.0.0.1:"+PORT;

class OnlineUsersList extends Component {
     constructor() {
        super();
        this.state = {
          userListOnline: false,
          endpoint: "http://127.0.0.1:5000",
            msg: ''
        };
         
        
      }

        componentDidMount(){
            this.props.fetchAllUsers();
            //console.log("user:", this.props.users);
            
            //this.props.users.map(user => {console.log("name ", user.name.givenName)});
        }

     componentWillReceiveProps(newProps) {
        if(!this.props.auth && newProps.auth)
            console.log("user:", newProps.auth.name.givenName);
         if(!io){
            const { endpoint } = this.state;
            console.log("endpoint", endpoint);
            io = socketIOClient(endpoint);
              console.log("io", io);
              console.log("io", io.connected);
              //console.log("socketIOClient", socketIOClient);
            
                io.on('connect', () => {
                    io.emit('registerUser', newProps.auth.userId);
                    connCheck = true;
              io.on("getUserList", data => {
                this.setState({ userListOnline: data });
                //console.log("userList: ", userListOnline);
            });
                });

//             io.on('getUserList', function(userList) {
//                console.log("userList: ", userList);
//             });
            
         }
    }
//    
//    
//    
//    componentDidMount() {
//        this.props.fetchAllUsers();
//    }
    
    //todo: get connected user list from socket manager
    
    
    renderAllUsers() {
        const { userListOnline } = this.state;
        console.log("userList: ", userListOnline);
        if(userListOnline.length<1) {
            return (
                    <div className="card darken-1">
                      <div className="card-content">
                        <span className="card-title"></span>
                        <p>
                         Sorry, no one online.
                        </p>
                        
                      </div>
                     
                    </div>
                );
        }
        else {
            var finalList = compare(userListOnline,this.props.users);
            console.log("finalList: ", finalList);
            return finalList.map(user => {
                return (
                            <div className="card darken-1" key={user._id}>
                              <div className="card-content">
                                <span className="card-title">{user.name.givenName}</span>
                                <p>
                                 {user.emailId}
                                </p>
                                <p>
                                    {loginStatus}
                                </p>  
                              </div>
                              <div className="card-action">
                                 <div className="">
                                    <Link to="/chat/new" className="btn-floating btn-large deep-orange accent-4"><i className="material-icons">chat</i></Link>
                                    <Link to="/chat/calendar" className="btn-floating btn-large deep-orange accent-4"><i className="material-icons">perm_contact_calendar</i></Link>
                                 </div>
                              </div>
                            </div>
                        //}
                    //}
                    
                );
            });
        }
    }
    
    // button click -> call action and then from socket manager
   //SendMsg({chatMsg.value},{user._id},{this.props.auth.userId})
    render() {
        return (
            
            <div><div><h1>Online users</h1></div>
                <div>
                    {this.renderAllUsers()}
                </div>
            </div>
        );
    }
}

// onClick={handleClick} 
//function handleChange(event) {
//  this.setState({msg: event.target.value})
//}
//
//  function handleClick(e) {
//    e.preventDefault();
//    console.log('The link was clicked.');
//      console.log(this.state.msg);
//  }

    
function SendMsg() {
    // get socket
    
    //send msg
}
function compare(onlineUsers,allUsers){
    var f_list = [];
    for (var i=0; i<onlineUsers.length-1; i++) {
        for (var j=0; j<allUsers.length-1; j++) {
            if (onlineUsers[i].userId === allUsers[j].userId){
                var newRec = allUsers[i];
                //newRec.socketId = onlineUsers[i].socketId;
                // insert in new array
                f_list.push(newRec);
            }
        }
    }
    console.log("f_list: ", f_list);
    return f_list;
}

function mapStateToProps({ users, auth }) {
    //console.log("props: ", users);
    return { users, auth };
}

export default connect(mapStateToProps, actions)(OnlineUsersList);