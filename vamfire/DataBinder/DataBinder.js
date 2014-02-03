var pathList = require('../PathList');
var eventObserver = require(pathList.PathList.eventObserver+'EventObserver');
var keyValueObserver = require(pathList.PathList.dataObserverType+'observerKeyValue');

var DataBinder = {
	i : 0,
	tmp : {},
	registSocket : function(sockObj) {
		// 보완 예정
		var newObserver = new keyValueObserver(sockObj);
		eventObserver.registObserver('Insert', newObserver);
		eventObserver.registObserver('Delete', newObserver);
		eventObserver.registObserver('Update', newObserver);
		eventObserver.registObserver('Get', newObserver);
		DataBinder.tmp[DataBinder.i++] = {'a' : sockObj, 'b' : newObserver};
	},
	unregistSocket : function(sockObj) {
		var newObserver;

		for (var key in DataBinder.tmp) {
			if (sockObj === DataBinder.tmp[key]['a']) {
				newObserver = DataBinder.tmp[key]['b']
				eventObserver.unregistObserver('Insert', newObserver);
				eventObserver.unregistObserver('Delete', newObserver);
				eventObserver.unregistObserver('Update', newObserver);
				eventObserver.unregistObserver('Get', newObserver);
				delete DataBinder.tmp[key];
			}
		};
	}
};

exports.registSocket = DataBinder.registSocket;
exports.unregistSocket = DataBinder.unregistSocket;