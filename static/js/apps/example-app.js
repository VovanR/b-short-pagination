/**
 * @author VovanR <mail@vovanr.com>
 */

define([
    'jquery',
    '../modules/short-pagination',
], function (
    $,
    ShortPagination
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

            this.ShortPagination = new ShortPagination({
                count: 100,
            });
        },
    };

    return App;

});
