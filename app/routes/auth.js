var authController = require('../controllers/authController');
var homeController = require('../controllers/homeController');

module.exports = function(app, passport) {

    app.get('/', authController.login);

    app.get('/login', authController.login);

    app.get('/logout', authController.logout);
    
    app.post('/login', passport.authenticate('local-signup', {
            successRedirect: '/home',
            sucessFlash: true,
            failureRedirect: '/login',
            failureFlash : true
        }
    ));

    app.get('/home', isLoggedIn, homeController.home);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
         
        res.redirect('/login');
    }

};