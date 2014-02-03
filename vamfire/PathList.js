var resetDirectory = function() {
	var tmpRoot = __dirname+'/';
	var tmpDataBinder = tmpRoot+'DataBinder/';
	var tmpDataObserverType = tmpDataBinder+'DataObserverType/';
	var tmpEventObserver = tmpRoot+'EventObserver/';
	var tmpEventType = tmpEventObserver+'EventType/';
	var tmpFaultObserver = tmpRoot+'FaultObserver/';

	exports.PathList = {
		root 			: tmpRoot,
		dataBinder 		: tmpDataBinder,
		dataObserverType: tmpDataObserverType,
		eventObserver 	: tmpEventObserver,
		eventType 		: tmpEventType,
		faultObserver 	: tmpFaultObserver
	}
};

exports.setRoot = function() {
	resetDirectory();
};