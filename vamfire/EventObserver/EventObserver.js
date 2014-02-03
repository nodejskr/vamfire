var pathList = require('../PathList');
var eventTypeManager = require(pathList.PathList.eventObserver+'EventTypeManager');

// 현재 이벤트 목록 식별자로 쓰임
// 추후에 각 이벤트별 개별 동작 이슈가 있을 경우 구현 예정
/*var eventGet = require(pathList.PathList.eventType+'EventGet');
var eventInsert = require(pathList.PathList.eventType+'EventInsert');
var eventUpdate = require(pathList.PathList.eventType+'EventUpdate');
var eventDelete = require(pathList.PathList.eventType+'EventDelete');*/

var EventObserver = {
	receiverList : {},
	init : function() {
		eventTypeManager.init();
		EventObserver.setReceiverList();
	},
	setReceiverList : function() {
		// set empty receiver list
		var eventType;
		for (var i = 0, len = eventTypeManager.countEventType(); i < len; i++) {
			eventType = eventTypeManager.getEventType(i);
			EventObserver.receiverList[eventType] = [];
		}
	},
	isContains : function(eventType, obj) {
		var index = EventObserver.receiverList[eventType].indexOf(obj);
		if (index == -1) {
			return false;
		}

		return index;
	},
	registObserver : function(eventType, addRecvObj) {
		if (eventTypeManager.checkEventType(eventType) == false ||
				EventObserver.isContains(eventType, addRecvObj) === true) {
			return false;
		}

		EventObserver.receiverList[eventType].push(addRecvObj);
		return true;
	},
	unregistObserver : function(eventType, removeRecvObj) {
		var index = -1;
		if (eventTypeManager.checkEventType(eventType) == false ||
				(index = EventObserver.isContains(eventType, removeRecvObj)) === false) {
			return false;
		}

		EventObserver.receiverList[eventType].splice(index, 1);
		return true;
	},
	notifyObservers : function(eventType, data) {
		if (eventTypeManager.checkEventType(eventType) == false) {
			return false;
		}

		var recvList = EventObserver.receiverList[eventType];

		for (var key in recvList) {
			var receiver = recvList[key];
			receiver.notify(eventType, data);
		}

		return true;
	}
};

EventObserver.init();

exports.registObserver = EventObserver.registObserver;
exports.unregistObserver = EventObserver.unregistObserver;
exports.notifyObservers = EventObserver.notifyObservers;

// test code
/*exports.getRecvObjList = function(eventType) {
	return EventObserver.receiverList[eventType];
}

exports.getRecvEveryEventObjList = function() {
	return EventObserver.receiverList;
}*/