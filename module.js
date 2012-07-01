/*
    This snippet is useful if you are making core JS modules
    and want to have them work with node and the browser.
    It supports:
        - CommonJS module.exports
        - AMD module definition (require.js)
        - Vanilla javascript
    If no module system is detected your module will be available
    in the global scope instead.
*/
(function() {
    var myModule = {};

    if (typeof module !== 'undefined') {
        // Assume nodejs
        module.exports = myModule;
    } else {
        if (typeof define === 'function') {
            // AMD module
            define([], function () {
                return myModule;
            });
        } else if (window) {
            // Fall back to installing histogram in window scope
            window.myModule = myModule;
        }
    }
}());
