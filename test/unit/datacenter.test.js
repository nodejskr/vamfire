
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

};
