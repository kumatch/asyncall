(function() {
    var global = this;
    var undef = 'undefined';
    var func  = 'function';

    if (typeof exports !== undef) {
        if (typeof module !== undef && module.exports) {
            exports = module.exports = asyncall;
        }
        exports.asyncall = asyncall;
    } else if (typeof define === func && define.amd) {
        define('asyncall', function() {
            return asyncall;
        });
    } else {
        global.asyncall = asyncall;
    }

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
}).call(this);