/**
 * @author VovanR [mail@vovanr.com]
 */

define([
    'jquery',
    '../modules/foo',
], function (
    $,
    Foo
) {

    var App;


    App = function () {
        this._initialize();
    };

    App.prototype = {
        /**
         * Initialize
         *
         * @private
         */
        _initialize: function () {
            console.info('App init');

            this.Foo = new Foo();

            var input = $('#foo-name');
            input.val(this.Foo.getName());
        },
    };

    return App;

});
