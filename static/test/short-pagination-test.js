requirejs([
    '../js/modules/short-pagination',
    'jquery',
], function (
    ShortPagination,
    $
) {

    'use strict';

    QUnit.start();

    QUnit.module('ShortPagination module', {
        setup: function () {
            this.p = new ShortPagination({
                count: 13,
                page: 1,
                perpage: 12,
            });
        },
        teardown: function () {
        }
    });

    QUnit.test('Should initialize', function (assert) {
        var p = this.p;

        assert.ok(p, 'Module is inited');
        assert.ok(p.o.block, 'block');
    });

    QUnit.test('getCount should return count of items', function (assert) {
        var p = this.p;

        assert.equal(p.getCount(), 13);
    });

    QUnit.test('getMaxPage should return last page number', function (assert) {
        var p = this.p;

        assert.equal(p.getMaxPage(), 2);
    });

    QUnit.test('getMaxPage should return `1`, if there is no items', function (assert) {
        var p = this.p;
        p.setData(1, 0);

        assert.equal(p.getMaxPage(), 1);
    });

    QUnit.test('getPage should return current page number', function (assert) {
        var p = this.p;

        assert.equal(p.getPage(), 1);
    });

    QUnit.test('setPage should change page', function (assert) {
        var p = this.p;

        p.setPage(2);

        assert.equal(p.getPage(), 2);
    });

    QUnit.test('setPage should not set wrong page', function (assert) {
        var p = this.p;

        p.setPage(3);
        assert.equal(p.getPage(), 2);

        p.setPage(0);
        assert.equal(p.getPage(), 1);
    });

    QUnit.test('setPage should change index of first showed item', function (assert) {
        var p = this.p;

        p.setPage(2);

        assert.equal(p.getFrom(), 13);
    });

    QUnit.test('setPage should change index of last showed item', function (assert) {
        var p = this.p;

        p.setPage(2);

        assert.equal(p.getTo(), 13);
    });

    QUnit.test('getFrom should return index of first showed item', function (assert) {
        var p = this.p;

        assert.equal(p.getFrom(), 1);

        p.setData(1, 0);
        assert.equal(p.getFrom(), 0);
    });

    QUnit.test('getTo should return index of last showed item', function (assert) {
        var p = this.p;

        assert.equal(p.getTo(), 12);
    });

    QUnit.test('setData should change page and count', function (assert) {
        var p = this.p;

        p.setData(3, 35);

        assert.equal(p.getPage(), 3);
        assert.equal(p.getCount(), 35);
    });

    QUnit.test('setData should fire render', function (assert) {
        var p = this.p;

        p.setData(3, 35);

        assert.equal(p.o.block.find('.js-short-pagination__current').text(), '25-35');
        assert.equal(p.o.block.find('.js-short-pagination__total').text(), 35);
    });

    QUnit.test('gotoPage should fire render', function (assert) {
        var p = this.p;

        p.gotoPage(2);

        assert.equal(p.o.block.find('.js-short-pagination__current').text(), '13-13');
        assert.equal(p.o.block.find('.js-short-pagination__total').text(), 13);
    });

    QUnit.test('Click next should set next page', function (assert) {
        var p = this.p;

        assert.equal(p.getPage(), 1);
        p.o.block.find('.js-short-pagination__next').trigger('click');
        assert.equal(p.getPage(), 2);
    });

    QUnit.test('Click prev should set prev page', function (assert) {
        var p = this.p;

        p.setPage(2);
        assert.equal(p.getPage(), 2);
        p.o.block.find('.js-short-pagination__prev').trigger('click');
        assert.equal(p.getPage(), 1);
    });

});
