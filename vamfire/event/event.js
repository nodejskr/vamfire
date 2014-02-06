/**
 * Event Dispatcher
 */

var eventDispatcher = {

	/** Action Type Value **/
	AT_DISPATCH: 1,
	AT_REMOVE:  2,


	listeners: {
		any: []	// event type
	},

	addlistener: function( fn, type ){
		
		type = type || 'any';
		if( typeof this.listeners[type] === "undefined" ){
			this.listeners[type] = [];
		}
		this.listeners[type].push(fn);

	},

	visitlisteners: function( at, arg, type ){

                var listentype = type || 'any';
                var listeners = this.listeners[listentype];

		if( typeof this.listeners[listentype] === "undefined" ){
			return;
		} 

                var i;
                var max = listeners.length;

                for( i = 0 ; i < max ; i += 1 ){

			if( eventDispatcher.AT_REMOVE == at ){
                	        if( listeners[i] === arg ){
        	                        listeners.splice( i, 1 );
	                       	}
			}else{
				listeners[i](arg);
			}

                }

	},

	removelistener: function( fn, type ){
		this.visitlisteners( eventDispatcher.AT_REMOVE, fn, type );
	},

	dispatch: function( dispatchtion, type ){
		this.visitlisteners( eventDispatcher.AT_DISPATCH, dispatchtion, type );
	},

	

};

exports.createEventDispatcher = function( obj ){

	var i;
	for( i in eventDispatcher ){
		if( eventDispatcher.hasOwnProperty(i) && typeof eventDispatcher[i] == 'function' ) {
			obj[i] = eventDispatcher[i];
		}
	}

	obj.listeners = {any: [] };

};
