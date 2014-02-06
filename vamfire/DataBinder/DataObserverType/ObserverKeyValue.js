// create new object
module.exports = function(sockObj, recvEventList) {
	var sockObj = sockObj;
	var recvEventList = (recvEventList != undefined) ? recvEventList : [];

	return {
		notify : function(eventType, data) {
			// 미구현
			console.log('notify : [' + eventType + ']'+data)
		},
		setSocket : function(newSockObj) {
			sockObj = newSockObj;
		},
		getSocket : function() {
			return sockObj;
		},
		setRecvEvent : function() {
		}
	}
};