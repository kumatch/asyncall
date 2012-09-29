(function(define) {
    var undef = 'undefined';
    var func  = 'function';

    define([], function () {
        return asyncall;
    });

    function asyncall(fn) {
        if (typeof setImmediate === func) {
            setImmediate(fn);
        } else if (typeof process !== undef && typeof process.nextTick === func) {
            process.nextTick(fn);
        } else if (typeof MessageChannel === func) {
            var channel = new MessageChannel();
            channel.port1.onmessage = fn;
            channel.port2.postMessage();
        } else {
            setTimeout(fn, 0);
        }
    }
})(typeof define === 'function'  ? define :
   typeof module !== 'undefined' ? function(deps, factory) {
       module.exports = factory.apply(this, deps.map(require));
   } :
   function(deps, factory) {
       this.asyncall = factory.apply(this, deps.map( function (dep) { return this[dep]; }) );
   });
