const passport = require('passport');

module.exports = (app) => {
    // google route handler for authentication
    app.get(
        '/auth/google',
        passport.authenticate('google',{
            scope:['profile','email']
        })
    );
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req,res) => {
            res.redirect('/dashboard');
        }
    );

    // facebook route handler for authentication
    app.get(
        '/auth/facebook',
        passport.authenticate('facebook'),
    );
    app.get('/auth/facebook/callback', passport.authenticate('facebook'),
           (req,res) => {
            res.redirect('/dashboard');
            }
           );


    app.get('/api/logout', (req,res)=> {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res)=>{
        res.send(req.user);
    });

    

/*     app.get('/api/users', (req, res) => {
        res.send(req.user);
        res.redirect('/surveys');
    });
    */

};
