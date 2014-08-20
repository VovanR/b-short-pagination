/**
 * @author VovanR [mail@vovanr.com]
 */

define([
], function (
) {

    var ShortPagination;


    /**
     * ShortPagination module
     *
     * @constructor
     */
    ShortPagination = function () {
        this.name = 'ShortPagination';
    };

    ShortPagination.prototype = {
        /**
         * Returns module name
         *
         * @returns {String} name
         */
        getName: function () {
            return this.name;
        },
    };


    return ShortPagination;

});
