require('should')

var createEventobject = function(){

	var event = require('../../vamfire/event/event');
	var ed = {};

	event.createEventDispatcher( ed )

	return ed;

}

module.exports = {

	"eventdispatcher create test": function(){

		var ed = createEventobject();

		ed.should.have.property('dispatch');
		ed.should.have.property('addlistener');
		ed.should.have.property('removelistener');

	},

	"eventdispatcher any eventdispatch test ": function(){

		var ed = createEventobject();

		var testflag = 0;
		var testfunc = function(){ testflag ++; };

		ed.addlistener( testfunc );

		ed.dispatch();

		testflag.should.eql( 1 );

		ed.removelistener( testfunc );
		ed.dispatch();

		testflag.should.eql( 1 );
		

	},

	"eventdispatcher differnt two event type test ": function(){

		var ed = createEventobject();

		var testflag_1 = 0;
		var testflag_2 = 0;

		var testfunction_1 = function(){ testflag_1 ++; };
		var testfunction_2 = function(){ testflag_2 ++; };

		ed.addlistener( testfunction_1, "test1" );
		ed.addlistener( testfunction_2, "test2" );

		ed.dispatch(null, "test1");
		ed.dispatch(null, "test2");

		testflag_1.should.eql(1);
		testflag_2.should.eql(1);

		ed.removelistener( testfunction_1, "test1" );

		ed.dispatch(null, "test1");
		ed.dispatch(null, "test2");

		testflag_1.should.eql(1);
		testflag_2.should.eql(2);

	},

	"eventdispatcher eventargument test ": function(){

		var ed = createEventobject();

		ed.addlistener( function( e ){ e.should.have.property('test'); e.test.should.eql(1); } );

		ed.dispatch( {test:1} );

	},

	"eventdispatcher not added type dispatch": function(){

		var ed = createEventobject();

		ed.dispatch( {}, "aaa" );

	},

};
