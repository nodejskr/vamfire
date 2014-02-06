var e_d = require( './event/event' );

/**
 * datacenter
 */
var DataElement = function( keyname, value ){

	// Default Value
	this.key	= keyname;
	this.value 	= value;
	this.childs	= new Array();		// DataElement 로 구성된 자식들
	
	// 넘어온 키 배열의 길이가 0 이면, 자기 자신을 리턴하고
	// 1보다 크면 0번째 배열의 키값으로 자식을 검색 하여 맞는 녀석을 리턴한다.
	/**
	 *
	 *
	 * param key[]	키 구분 배열
	 */
	this.find = function( key ){
	
		if( key.length <= 0 ){
		 	return this;
		 };

		var findchild = this.childs[ key[0] ];
			
		if( null == findchild ) return null;
		
		return findchild.find( key.slice(1) );
			
	};
	
	/**
	 *
	 *
	 * param key[]	키 구분 배열
	 * param value	값 ( String )
	 */
	// 키가 없다면 안쪽으로 쭉 깊숙하게 만드는 형태로 간다.
	this.addChild = function( key, value ){
		
		if( key.length <= 0 ){
			this.value = value;
			return true;
		}
		
		var findchild = this.childs[ key[0] ];
		
		if( null == findchild ){
			findchild = new DataElement( key[0], '' );
			this.childs[ key[0] ] = findchild;

			exports.dispatch( { key: key }, "add" );
			
		}
		
		return findchild.addChild( key.splice(1), value );
		
	};

};

var data = new DataElement( "", "" );

exports.contain = function( key ){
	return data.find( key ) != null;
};

exports.get = function( key ){
	var ret =  data.find( key );
	if( null == ret ) 	return null;
	else 				return ret.value;
};

exports.add = function( key, value ){
	return data.addChild( key, value );
};

e_d.createEventDispatcher( exports );
