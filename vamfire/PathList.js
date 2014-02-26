var resetDirectory = function() {
	var tmpRoot = __dirname+'/';
	var tmpDataBinder = tmpRoot+'DataBinder/';
	var tmpEvent = tmpRoot+'Event/';
	var tmpMediator = tmpRoot+'Mediator/';
	var tmpDataBinder = tmpRoot+'DataBinder/';
	var tmpFaultObserver = tmpRoot+'FaultObserver/';

	exports.PathList = {
		root 			: tmpRoot,
		dataBinder 		: tmpDataBinder,
		event 			: tmpEvent,
		mediator 		: tmpMediator,
		faultObserver 	: tmpFaultObserver
	}
};

exports.setRoot = function() {
	resetDirectory();
};