/**
 * tasks
 */

var EC_SUCCESS 			= 1; 
var EC_NOT_FOUND_KEY 	= 0;
var	EC_UNKNOWN_ERROR	= 100;

var isSuccess = function( code ){
	return ( code == EC_SUCCESS ? "success" : "false" );
};
 
exports.run_selecttask = function( key, param, datacenter ){

	var ret = { };
	
	// Key value Find
	var value = datacenter.get( key );
	
	if( null != value ){
		
		ret.key 	= key.join("/");
		ret.value 	= value;
		ret.result = isSuccess( EC_SUCCESS );
		
	}else{
	
		ret.key 	= key.join("/");
		ret.result = isSuccess( EC_NOT_FOUND_KEY );
		
	}

 
 	return ret;

 
 };
 
 /**
  * post 로 body를 보낼때는 value=값으로 보내야 합니다.
  *   : 이 부분의 나중에 개선 해야 할것 같음
  */
 exports.run_inserttask = function( key, param, value, datacenter ){
 	var ret = {};
 	
 	ret.key = key.join("/");
 	
 	// add
 	if( datacenter.add( key, value.value ) ){
 		ret.value = value.value;
 		ret.result = isSuccess( EC_SUCCESS );	
 	}else{
 		ret.result = isSuccess( EC_UNKNOWN_ERROR );
 	}
 	return ret;
 }