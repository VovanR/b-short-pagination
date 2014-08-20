/**
 * @author VovanR [mail@vovanr.com]
 */

define([
    'jquery',
    'underscore',
], function (
    $,
    _
) {

    var ShortPagination;
    var defaults = {
        block: $('.js-short-pagination'),
        count: 0,
    };

    /**
     * ShortPagination module
     *
     * @constructor
     * @param {Object} [o={}] Options
     * @param {jQuery} [o.block=$('.js-short-pagination')] Module block
     * @param {Number} [o.count=0] Count of items
     */
    ShortPagination = function (o) {
        this.o = o || {};
        _.defaults(this.o, defaults);
    };

    ShortPagination.prototype = {
        /**
         * Returns count
         *
         * @return {Number} count
         */
        getCount: function () {
            return this.o.count;
        },
    };

    return ShortPagination;

});
