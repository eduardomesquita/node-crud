var exports = module.exports = {}

exports.home = function(req, res) {
    res.render('home', {  message : req.flash('error') });
};
