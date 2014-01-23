
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var reqparser = require( './vamfire/requestparser' );
var datacenter = require( './vamfire/vamfire_datacenter' );
var tasks = require( './vamfire/vamfire_task' );


var app = express();
var server = app.listen(process.env.PORT || 3000);
var io = require('socket.io').listen(server);

// all environments]
app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});

// development only
app.configure('development', function(){
  app.use(express.errorHandler());
});

// init modules
reqparser.setdatacenter( datacenter )
reqparser.settasks( tasks )

// Link Address Parse
app.get('/*', reqparser.index);
app.post('/*', reqparser.index);
app.put('/*', reqparser.index);
app.delete('/*', reqparser.index);

// socket.io
io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
    socket.on('disconnect', function () {
        io.sockets.emit('message', "closed");
    });
});

console.log('Express server listening on port ' + app.get('port'));