/**
 * request parser
 */

var _tasks = null;
var _center = null;

// need to test Code...
var parseUrl_to_DataKey = function ( url ){

	var ret = url.split( "/" );
	
	if( ret[0] == "" ) ret = ret.splice( 1 );
	if( ret[ ret.length - 1 ] == "" ) ret = ret.slice( 0, ret.length - 1 );

	return ret;

}
 
exports.index = function(req, res){

	var retstr = _tasks + " " + _center + " ";
	
	// Request Type parse
	retstr += req.method + "\n ";
	retstr += parseUrl_to_DataKey( req.url ) + "\n ";
	retstr += req.params + "\n ";
	retstr += req.body;
	
	if( "GET" == req.method ){
		retstr = _tasks.run_selecttask( parseUrl_to_DataKey( req.url ), req.params, _center );
	}else if( "POST" == req.method ){
		retstr = _tasks.run_inserttask( parseUrl_to_DataKey( req.url ), req.params, req.body, _center );
	}

	// response
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify( { msg : retstr }));
  
};


//////////////////////////////////////////////////////////////////////
// Setting Functions
exports.settasks = function( tasks ){
	_tasks = tasks;
};

exports.setdatacenter = function( center ){
	_center = center;
};