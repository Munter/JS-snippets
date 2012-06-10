/*global document*/
(function () {
    defer = (function (document, script) {
        var scripts = {},
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
    }(document, 'script'));
}());
