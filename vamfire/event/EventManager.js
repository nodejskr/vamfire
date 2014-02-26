var eventFactory = require('./EventFactory');
var mediator = require('../Mediator/Mediator');

module.exports = {
	// eventQueue : {}, 추후 구현을 목표로... 굉장히 많은 이벤트 발생시 동시 처리가 불가능 할 수도 있음
	addData : function(addKey, addValue) {
		var addEvent = eventFactory.createEventType(
			eventFactory.ET_ADD(),
			{key : addKey, value : addValue}
		);

		mediator.modifyData(addEvent);
	},
	deleteData : function(delKey) {
		var delEvent = eventFactory.createEventType(
			eventFactory.ET_DELETE(),
			{key : delKey}
		);

		mediator.modifyData(delEvent);
	},
	updateData : function(modKey, modValue) {
		var modEvent = eventFactory.createEventType(
			eventFactory.ET_UPDATE(),
			{key : modKey, value : modValue}
		);

		mediator.modifyData(modEvent);
	}
};