/*global Element*/
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        return factory;
    } else {
        var tmp = factory();
        root.on = tmp.on;
        root.un = tmp.un;
    }
}(this, function () {
    var proto = Element.prototype,
        match = proto.matchesSelector ||
            proto.webkitMatchesSelector ||
            proto.mozMatchesSelector ||
            proto.msMatchesSelector ||
            proto.oMatchesSelector;

    return {
        on: function (type, selector, fn) {
            var callback = function (e) {
                    if (match.call(e.target, selector)) {
                        fn.apply(e.target, e);
                    } else if (match.call(e.target, selector + ' *')) {
                        // Walk up the dom
                        var current = e.target.parentNode;

                        do {
                            if (match.call(current, selector)) {
                                fn.apply(current, e);
                                break;
                            }
                        } while (current = current.parentNode);
                    }
                };

            document.documentElement.addEventListener(type, callback, false);

            return callback;
        },

        un: function (type, fn) {
            document.documentElement.removeEventListener(type, fn, false);
        }
    };
}));
