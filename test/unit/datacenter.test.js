
var createDC = function(){
	return require( '../../vamfire/vamfire_datacenter.js' );
}

require('should')

module.exports = {

	"datacenter 1depth value test ": function(){
		var key = ['test'];
		var value = 'test';

		var dc = createDC();
		dc.contain(key).should.eql(false);
		dc.add( key, value ).should.eql(true);
		dc.contain( key ).should.eql(true);
		dc.get( key ).should.eql( value );

	},

        "datacenter 2depth value test ": function(){
                var key = ['test','test2'];
                var value = 'test';

                var dc = createDC();
                dc.contain(key).should.eql(false);
                dc.add( key, value ).should.eql(true);
                dc.contain( key ).should.eql(true);
                dc.get( key ).should.eql( value );

        },

	"datacenter eventlistner test" : function(){


		var dc = createDC();

		dc.should.have.property( "addlistener" );
		dc.should.have.property( "removelistener" );
		

		var add_flag = 0;
		var current_key = null;

		dc.addlistener( function( e ){ 
				
				add_flag ++;
				e.should.have.property("key");
				e.key.should.eql( current_key ); 
			}, 
			"add" );
	
		// 1depth
		current_key = ['test125'];
		dc.add( ['test125'], 'test' );
		add_flag.should.eql( 1 );

		current_key = ['test123'];
		dc.add( ['test123'], 'test' );
		add_flag.should.eql( 2 );

		// 2depth
		//current_key = ['test123','test124'];
		//dc.add( current_key, 'test' );
		//add_flag.should.eql( 3 );

	},

};
