var pathList = require('../PathList');
var eventTypeManager = require(pathList.PathList.eventObserver+'EventTypeManager');

// 현재 이벤트 목록 식별자로 쓰임
// 추후에 각 이벤트별 개별 동작 이슈가 있을 경우 구현 예정
/*var eventGet = require(pathList.PathList.eventType+'EventGet');
var eventInsert = require(pathList.PathList.eventType+'EventInsert');
var eventUpdate = require(pathList.PathList.eventType+'EventUpdate');
var eventDelete = require(pathList.PathList.eventType+'EventDelete');*/

var EventObserver = {
	observerList : {},
	init : function() {
		eventTypeManager.init();
		EventObserver.setObserverList();
	},
	setObserverList : function() {
		// set empty observer list
		var eventType;
		for (var i = 0, len = eventTypeManager.countEventType(); i < len; i++) {
			eventType = eventTypeManager.getEventType(i);
			EventObserver.observerList[eventType] = [];
		}
	},
	isContains : function(eventType, obj) {
		var index = EventObserver.observerList[eventType].indexOf(obj);
		if (index == -1) {
			return false;
		}

		return index;
	},
	registObserver : function(eventType, observer) {
		if (eventTypeManager.checkEventType(eventType) == false ||
				EventObserver.isContains(eventType, observer) === true) {
			return false;
		}

		EventObserver.observerList[eventType].push(observer);
		return true;
	},
	unregistObserver : function(eventType, observer) {
		var index = -1;
		if (eventTypeManager.checkEventType(eventType) == false ||
				(index = EventObserver.isContains(eventType, observer)) === false) {
			return false;
		}

		EventObserver.observerList[eventType].splice(index, 1);
		return true;
	},
	notifyObservers : function(eventType, data) {
		if (eventTypeManager.checkEventType(eventType) == false) {
			return false;
		}

		var obsvList = EventObserver.observerList[eventType];

		for (var key in obsvList) {
			var observer = obsvList[key];
			observer.notify(eventType, data);
		}

		return true;
	}
};

EventObserver.init();

exports.registObserver = EventObserver.registObserver;
exports.unregistObserver = EventObserver.unregistObserver;
exports.notifyObservers = EventObserver.notifyObservers;

// test code
/*exports.getObserverList = function(eventType) {
	return EventObserver.observerList[eventType];
}

exports.getEveryObserverList = function() {
	return EventObserver.observerList;
}*/