if (typeof munter === 'undefined') {
    munter = {}
}

munter.defer = (function () {
    var urls = [];
    
    return function (url, callback) {
        var inc;
        
        if (url && urls.indexOf(url) === -1) {
            inc = document.createElement('script');
            inc.async = true;
            inc.src = url;
            inc.onload = callback || function () {};
            document.getElementsByTagName('head')[0].appendChild(inc);
        }
    }
}());
