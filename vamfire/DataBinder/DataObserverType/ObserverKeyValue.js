// create new object
module.exports = function(firstSockObj) {
	var sockObj = firstSockObj;

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
		}
	}
};