# mw-queue

Creates request handling middleware. Incoming requests will be queued until a handler is added. Once a handler is added all queued requests will be flushed to the handler. Further requests will go straight to the handler.

## Example:
```javascript
var http = require('http');
var createMwQueue = require('mw-queue');

function createSomeMiddleware() {
	var q = createMwQueue();

	// Not ready to handle requests yet, need to load files or do something async
	setTimeout(function() {
		q.setHandler(function(req, res) {
			res.end('Handled!');
		});
	}, 500);

	return q;
}

http.createServer(createSomeMiddleware()).listen(80);
```

## API:
* createMwQueue - Creates a new queue
	* .setHandler(mw) - Set a middleware handler which will accept the incoming requests


## License: MIT
