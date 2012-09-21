/*global document*/
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        return factory;
    } else {
        root.defer = factory();
    }
}(this, function () {
    var document = document,
        script = 'script',
        scripts = {},
        firstScript = document.getElementsByTagName(script)[0];

    return function (url) {
        var inc;

        if (typeof scripts[url] === 'undefined') {
            inc = document.createElement(script);
            inc.async = true;
            inc.src = url;
            firstScript.parentNode.insertBefore(inc, firstScript);
            scripts[url] = inc;
        }
    };
}));
