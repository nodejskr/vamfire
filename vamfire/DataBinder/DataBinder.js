var pathList = require('../PathList');
var eventFactory = require('../Event/EventFactory');

var DataBinder = {
	i : 0,
	socketPool : {},
	data : {},
	registSocket : function(sockObj) {
		DataBinder.socketPool[DataBinder.i++] = sockObj;
	},
	unregistSocket : function(sockObj) {
		for (var key in DataBinder.socketPool) {
			if (sockObj === DataBinder.socketPool[key]) {
				delete DataBinder.socketPool[key];
			}
		};
	},
	modifyData : function(event) {
		switch (event.type) {
			case eventFactory.ET_ADD() :
				DataBinder.add(event.key, event.value);
				break;
			case eventFactory.ET_UPDATE() :
				DataBinder.update(event.key, event.value);
				break;
			case eventFactory.ET_DELETE() :
				DataBinder.delete(event.key);
				break;
			default :
				break;
		}
		DataBinder.sendEvent(event);
	},
	add : function(key, value) {
		DataBinder.data[key] = value;
	},
	update : function(key, value) {
		DataBinder.data[key] = value;
	},
	delete : function(key) {
		delete(DataBinder.data[key]);
	},
	sendEvent : function(event) {
		console.log(DataBinder.data);
		for (var key in DataBinder.socketPool) {
			var socket = DataBinder.socketPool[key];
		};
	}
};

exports.registSocket = DataBinder.registSocket;
exports.unregistSocket = DataBinder.unregistSocket;
exports.modifyData = DataBinder.modifyData;