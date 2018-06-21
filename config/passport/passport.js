var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {
    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id).then(function(user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });
    
    passport.use('local-signup', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },function(req, username, password, done) {
        var User = user;
 
        var isValidPassword = function(userpass, password) {
            return bCrypt.compareSync(password, userpass);
        }
 
        User.findOne({
            where: {
                username: username
            }
        }).then(function(user) {
 
            if (!user) {
                return done(null, false, {
                    message: 'Usuário não encontrado.'
                });
            }
 
            if (!isValidPassword(user.password, password)) {
                return done(null, false, {
                    message: 'Senha inválida.'
                });
            }

            var userinfo = user.get();
            return done(null, userinfo); 

        }).catch(function(err) {
            console.log('Error:', err);
            return done(null, false, {
                message: 'Error interno do servidor.'
            });
        });
  
    } ));
    
}