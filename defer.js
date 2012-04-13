// Asyncronously loads a javascript with a given url and executes an optional callback
if (typeof munter === 'undefined') {
    munter = {}
}

munter.defer = (function (document, script) {
    var urls = [],
        firstScript = document.getElementsByTagName(script)[0];

    return function (url, callback) {
        var inc;

        if (url && urls.indexOf(url) === -1) {
            inc = document.createElement(script);
            inc.async = true;
            inc.src = url;
            inc.onload = callback || function () {};
            firstScript.parentNode.insertBefore(inc, firstScript);
        }
    }
}(document, 'script'));
