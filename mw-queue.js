var slice = require('array-slice');


function createMiddlewareQueue() {
	var handler;
	var queue = [];

	function mw() {
		var args = slice(arguments);

		if(handler) {
			flush();

			handler.apply(null, args);
		} else {
			queue.push(args);
		}
	};

	function flush() {
		if(queue.length > 0) {
			queue.forEach(function(args) {
				handler.apply(null, args);
			});

			queue = [];
		}
	}

	mw.setHandler = function(h) {
		handler = h;
	};

	return mw;
}


module.exports = createMiddlewareQueue;
