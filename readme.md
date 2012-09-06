asyncall.js
===========

Asynchronous function call on Node or Browser.


Usage
-----

###on Browser.

```
<script type="text/javascript" src="asyncall.min.js"></script>
```

```javascript
asyncall(function () {
    alert(1 + 2);
});
```

###on Node.

```javascript
var asyncall = require('asyncall');

asyncall(function () {
    console.log(1 + 2);
});
```


Installation
-------------

    $ npm install asyncall



Technology
----------

* setImmediate (IE 10, Node >= v0.9)
* process.nextTick (Node <= v0.8)
* MessageChannel (WebKit)
* setTimeout (Legacy)