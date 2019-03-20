import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Footer from './Footer';
import Landing from './landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
//import socketIOClient from "socket.io-client";

class App extends Component {
//     constructor() {
//        super();
//        this.state = {
//          response: false,
//          endpoint: "http://127.0.0.1:5003"
//        };
//        
//      }
    componentDidMount(){
        this.props.fetchUser();
        // socket connect from URL here
    }
//    componentWillReceiveProps(newProps) {
//        if(!this.props.auth && newProps.auth)
//        {
//            console.log("user:", newProps.auth.name.givenName);
//            const { endpoint } = this.state;
//            console.log("endpoint", endpoint);
//            const io = socketIOClient(endpoint);
//              console.log("io", io);
//              //console.log("socketIOClient", socketIOClient);
//
//            io.on('connect', () => {
//                io.emit('registerUser', newProps.auth.userId);
//                console.log("reached in");
//            });
//        }
//         
//    }
    render() {
        return (
            <div className="container">
               <BrowserRouter>
                  <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                        <Footer />
                  </div>
               </BrowserRouter>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    //console.log("props: ", users);
    return { auth };
}


export default connect(mapStateToProps, actions)(App);
