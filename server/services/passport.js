const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose'); 
const keys = require('../config/keys'); 

const User = mongoose.model('users');

// user.id is something which is in the mongoDB's unique identifier  "$oid" 
passport.serializeUser( (user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
      .then(user => {
        done(null, user);
    });
});

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
        }, 
        async (accessToken, refreshToken, profile, done) => {
    
            const existingUser = await User.findOne({ userId: profile.id })
            if(existingUser){
               return done(null, existingUser);
            } 
            
            const user = await new User(
                { 
                    userId: profile.id, 
                    emailId: profile.emails[0].value, 
                    authenticatedBy: 'google',
                    name: {
                        familyName: profile.name.familyName, givenName: profile.name.givenName
                    }
                }).save()
            done(null, user);
            } 
        )
);
passport.use(new FacebookStrategy({
        clientID: keys.facebookClientID,
        clientSecret: keys.facebookClientSecret,
        callbackURL: '/auth/facebook/callback',
        proxy: true
        }, 
                                  
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ userId: profile.id })
            if(existingUser){
                return done(null, existingUser);
            } 
    
            const user = await new User({ userId: profile.id }).save()
            done(null, user); 
        })
);
