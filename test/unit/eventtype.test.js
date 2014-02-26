require('should');
var assert = require('assert');

var createEventtype = function(){

	return require('../../vamfire/Event/EventFactory');
	
}


module.exports = {


	"event type list check" : function(){

		var et = createEventtype();

		et.should.have.property('ET_ADD');
		et.should.have.property('ET_UPDATE');
		et.should.have.property('ET_DELETE');
		

	},

	"event type ADD, UPDATE, DELETE Default property Check": function(){
	
		var et = createEventtype();

		var event_test = function( et_type, arg ){

			var add_event = et.createEventType( et_type, arg );

        		assert.isNotNull( add_event );

                        add_event.should.have.property("type");
                        add_event.should.have.property("key");
                        add_event.should.have.property("value");

                        add_event.type.should.eql( et_type );
                        add_event.key.should.eql( arg.key );
                        add_event.value.should.eql( arg.value );
		}


		event_test(et.ET_ADD(), { key: ['test'], value:'ttt'});
		event_test(et.ET_ADD(), { key: ['test', 'test'], value:'test'});

                event_test(et.ET_UPDATE(), { key: ['test'], value:'ttt'});
                event_test(et.ET_UPDATE(), { key: ['test', 'test'], value:'test'});

                event_test(et.ET_DELETE(), { key: ['test'], value:'ttt'});
                event_test(et.ET_DELETE(), { key: ['test', 'test'], value:'test'});
		
	},

}
