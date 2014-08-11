/**
 * Created by ZYW on 2014/8/11.
 */

var routes = require('./routes/index');
var users = require('./routes/users');

module.exports = function(app){
    app.use('/', routes);
    app.use('/users', users);
};

