import React from 'react';
//import { Link } from 'react-router-dom';
import UserList from './users/UserList';
import OnlineUserList from './users/OnlineUsersList';

const Dashboard = () => {
    return (
        <div>
            
            <OnlineUserList />
            <UserList />
            
        
           
        </div>
    );
};

export default Dashboard;

/*
 <div className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>
 </div>
 
 //<SocketManager />
 //import SocketManager from './SocketManager';


*/