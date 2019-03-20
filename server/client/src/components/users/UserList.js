import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions';

class UserList extends Component {
    componentDidMount() {
        this.props.fetchAllUsers();
    }
    
    renderAllUsers() {
        return this.props.users.map(user => {
            return (
                <div className="card darken-1" key={user._id}>
                  <div className="card-content">
                    <span className="card-title">{user.name.givenName}</span>
                    <p>
                     {user.emailId}
                    </p>
                  </div>
                  <div className="card-action">
                    <button className="btn deep-orange accent-4 white-text">Profile</button> 
                    <button className="btn deep-orange accent-4 white-text right">More actions</button>
                  </div>
                </div>
            );
        });
    }
   
    render() {
        return (
            
            <div><div><h1>All users</h1></div>
                <div>
                    {this.renderAllUsers()}
                </div>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return { users };
}


                /*
                        switch ({loginStatus}) {
                            case online: 
                                return "Online";
                            case away: 
                                return "away";
                            default:
                                return "Offline";
                        }
                        */
export default connect(mapStateToProps, { fetchAllUsers })(UserList);