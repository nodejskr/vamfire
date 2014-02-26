var eventFactory = require('../Event/EventFactory');
var dataBinder = require('../DataBinder/DataBinder');

var Mediator = {
	modifyData : function(event) {
		dataBinder.modifyData(event);
	}
};

exports.modifyData = Mediator.modifyData;