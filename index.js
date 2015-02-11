/**
 * ShortPagination module
 *
 * @module ShortPagination
 * @see {@link https://github.com/VovanR/b-short-pagination|GitHub}
 * @author VovanR <mail@vovanr.com>
 * @version 0.0.0
 */
define([
    'jquery',
    'underscore',
], function (
    $,
    _
) {

    'use strict';

    /**
     * @param {Object} [o={}] Options
     * @param {jQuery} [o.block=$('.js-short-pagination')] Module block
     * @param {Number} [o.count=0] Count of items
     * @param {Number} [o.page=0] Current page number
     * @param {Number} [o.perpage=12] Items per page
     * @constructor
     * @alias module:ShortPagination
     */
    var ShortPagination = function (o) {
        this.o = o || {};
        _.defaults(this.o, {
            block: $('.js-short-pagination'),
            count: 0,
            page: 1,
            perpage: 12,
        });

        var block = this.o.block;
        this.bCurrent = block.find('.js-short-pagination__current');
        this.bTotal = block.find('.js-short-pagination__total');

        this._initialize();
    };

    ShortPagination.prototype = {
        /**
         * Initialize
         *
         * @private
         */
        _initialize: function () {
            console.info('ShortPagination init');

            this._bindControls();

            this.render();
        },

        /**
         * Bindings
         *
         * @private
         */
        _bindControls: function () {
            var _this = this; // Save context

            this.o.block
                .on('click', '.js-short-pagination__prev', function (e) {
                    _this.gotoPrevPage();

                    e.preventDefault();
                })
                .on('click', '.js-short-pagination__next', function (e) {
                    _this.gotoNextPage();

                    e.preventDefault();
                });
        },

        /**
         * Sets the current page number
         *
         * @param {Number} page
         * @return {ShortPagination}
         */
        setPage: function (page) {
            if (page > 0 && page <= this.getMaxPage()) {
                this.o.page = page;
            } else if (page < 1) {
                this.o.page = 1;
            } else {
                this.o.page = this.getMaxPage();
            }

            return this;
        },

        /**
         * Go to page number and rerender the block
         *
         * @param {Number} page
         */
        gotoPage: function (page) {
            this.setPage(page);
            this.render();
        },

        /**
         * Go to previous page
         */
        gotoPrevPage: function () {
            if (this.o.page === 1) {
                return;
            }

            this.gotoPage(this.o.page - 1);
        },

        /**
         * Go to next page
         */
        gotoNextPage: function () {
            if (this.o.page === this.getMaxPage()) {
                return;
            }

            this.gotoPage(this.o.page + 1);
        },

        /**
         * Returns the number of items
         *
         * @return {Number} count
         */
        getCount: function () {
            return this.o.count;
        },

        /**
         * Returns the current page number
         *
         * @return {Number} page
         */
        getPage: function () {
            return this.o.page;
        },

        /**
         * Sets count of items
         *
         * @param {Number} count
         * @return {ShortPagination}
         */
        setCount: function (count) {
            this.o.count = count;

            return this;
        },

        /**
         * Returns the last page number
         *
         * @return {Number} maxPage
         */
        getMaxPage: function () {
            // Minimum one page, not zero
            return Math.ceil(this.o.count / this.o.perpage) || 1;
        },

        /**
         * Returns the number of the first item on current page
         *
         * @return {Number} from
         */
        getFrom: function () {
            var from = 0;

            if (this.o.count > 0) {
                from = (this.o.page - 1) * this.o.perpage + 1;
            }

            return from;
        },

        /**
         * Returns the number of the last item in current page
         *
         * @return {Number} to
         */
        getTo: function () {
            var to;

            if (this.o.page < this.getMaxPage()) {
                to = this.o.page * this.o.perpage;
            } else {
                to = this.o.count;
            }

            return to;
        },

        /**
         * Sets current page number and count of items. And rerender the block
         * Used with ajax-response
         *
         * @param {Number} page
         * @param {Number} count
         */
        setData: function (page, count) {
            this.setCount(count);
            this.setPage(page);
            this.render();
        },

        /**
         * Render the block
         */
        render: function () {
            this.bCurrent.text(this.getFrom() + '-' + this.getTo());
            this.bTotal.text(this.getCount());
        },
    };

    return ShortPagination;

});
