/**
 * @author VovanR [mail@vovanr.com]
 */

define([
], function (
) {

    var Foo;


    /**
     * Foo module
     *
     * @constructor
     */
    Foo = function () {
        this.name = 'Foo';
    };

    Foo.prototype = {
        /**
         * Returns module name
         *
         * @returns {String} name
         */
        getName: function () {
            return this.name;
        },
    };


    return Foo;

});
