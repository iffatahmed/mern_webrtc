import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';
import allUsersReducer from './allUsersReducer';
//import socketReducer from './socket/reducer';
//import messageReducer from './message/reducer';
//import statusReducer from './status/reducer';

export default combineReducers ({
    auth: authReducer,
    form: reduxForm,
    surveys: surveysReducer,
    users: allUsersReducer//,
//    socketState: socketReducer,
//    messageState: messageReducer,
//    statusState: statusReducer
    
});