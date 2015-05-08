$_jQuery = $;

$ = undefined;

(function () {

    var $ = function (selector) {
        return new js(selector);
    }

    var js = function (selector) {
        var selector = (selector === undefined) ? document : selector;
        this.selector = ((typeof selector == 'object' ) ?
                selector
                : document.querySelectorAll(selector)),
            i = 0;
        selector = this.selector;

        this.length = selector.length;
        this.version = '0.1.0';
        this.website = 'https://github.com/liuitt/dolar';

        for (; i < this.length; i++) {
            this[i] = selector[i];
        }

        return this;
    }

    if (window.$ === undefined) {
        window.$ = $;
    }

    $.ajax = function(params) {
        return $();
    }

})();

jQuery = $;

console.log($.ajax({url:'http://teste.com'}).version);
