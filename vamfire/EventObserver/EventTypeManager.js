var fs = require('fs');
var pathList = require('../PathList');

// helper object
var EventTypeManager = {
	dirPath : pathList.PathList.eventType,
	eventTypeList : [],
	init : function() {
		EventTypeManager.setEventTypeList();
	},
	setEventTypeList : function() {
		// get file list
		var files = fs.readdirSync(EventTypeManager.dirPath);

		for (var fileName in files) {
			if (!files.hasOwnProperty(fileName)) {
				continue;
			}

			var name = EventTypeManager.dirPath+'/'+files[fileName];

			if (fs.statSync(name).isDirectory() == false) {
				// get file name
				var checkEventTypeName = files[fileName].replace(/(^Event)|(\.js$)/gi, '');

				EventTypeManager.eventTypeList.push(checkEventTypeName);
			}
		}
	},
	// event type checker
	checkEventType : function(eventTypeName) {
		var checkEventTypeName;
		for (var key in EventTypeManager.eventTypeList) {
			checkEventTypeName = EventTypeManager.eventTypeList[key];
			if (eventTypeName == checkEventTypeName) {
				return true;
			}
		}

		return false;
	},
	countEventType : function() {
		return EventTypeManager.eventTypeList.length;
	},
	getEventType : function(index) {
		return EventTypeManager.eventTypeList[index];
	}
};

exports.init = EventTypeManager.init;
exports.checkEventType = EventTypeManager.checkEventType;
exports.countEventType = EventTypeManager.countEventType;
exports.getEventType = EventTypeManager.getEventType;