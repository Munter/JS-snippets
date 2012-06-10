/*global document*/
(function () {
    defer = (function (document, script) {
        var scripts = {},
            firstScript = document.getElementsByTagName(script)[0];

        return function (url, callback) {
            var inc;

            if (typeof scripts[url] === 'undefined') {
                inc = document.createElement(script);
                inc.async = true;
                inc.src = url;
                if (callback) {
                    inc.onload = function () {
                        if (!inc.onloadDone) {
                            inc.onloadDone = true;
                            callback();
                        }
                    };
                    inc.onreadystatechange = function () {
                        if (inc.readyState === "loaded" || inc.readyState === "complete") {
                            inc.onload();
                        }
                    };
                }
                firstScript.parentNode.insertBefore(inc, firstScript);
                scripts[url] = inc;
            } else {
                if (callback) {
                    callback();
                }
            }
        };
    }(document, 'script'));
}());
