
module.exports = {

	//Event Type Define

	ET_ADD: function(){  return "ADD"; },
	ET_UPDATE: function(){ return "UPDATE";},
	ET_DELETE: function(){ return "DELETE";},


	// Event Type Create Factory

	createEventType: function( type, arg ){

		return { type:type, key:arg.key, value:arg.value };

	},

}
