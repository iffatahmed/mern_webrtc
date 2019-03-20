const _ = require('lodash');
const Path = require('path-parser').default;
const { URL } = require('url');
const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
//const requireCredit = require('../middlewares/requireCredit');
const User = mongoose.model('users');


module.exports = app => {
    
    app.get('/api/users', requireLogin, async (req, res) => {
        const users = await User.find();
        
        res.send(users);
    });
    
   
};