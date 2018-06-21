var exports = module.exports = {}

exports.login = function(req, res) {
    res.render('index', {  message : req.flash('error') });
};

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        if(err) console.log(err);
        res.redirect('/');
    });
};
