requirejs([
    '../vendor/chai/chai',
    'jquery',
    '../index',
], function (
    chai,
    $,
    ShortPagination
) {

    'use strict';

    mocha.setup('bdd');
    var assert = chai.assert;

    describe('ShortPagination', function () {
        var module = function () {
            return new ShortPagination({
                block: $('.js-short-pagination'),
                count: 13,
                page: 1,
                perpage: 12,
            });
        };

        var _bFixtureTemplate = $('#fixture-template');
        var _fixtureTemplate = _bFixtureTemplate.html();
        _bFixtureTemplate.empty();

        beforeEach(function () {
            $('#fixtures').html(_fixtureTemplate);
        });

        afterEach(function () {
        });

        describe('constructor', function () {
            it('should initialize', function () {
                var m = module();
                assert.isDefined(m);
            });

            it('should have block', function () {
                var m = module();
                assert.isDefined(m.o.block[0]);
            });
        });

        describe('#getCount', function () {
            it('should return count of items', function () {
                var m = module();
                assert.equal(m.getCount(), 13);
            });
        });

        describe('#getMaxPage', function () {
            it('should return last page number', function () {
                var m = module();
                assert.equal(m.getMaxPage(), 2);
            });
        });

        describe('#getMaxPage', function () {
            it('should return `1`, if there is no items', function () {
                var m = module();
                m.setData(1, 0);
                assert.equal(m.getMaxPage(), 1);
            });
        });

        describe('#getPage', function () {
            it('should return current page number', function () {
                var m = module();
                assert.equal(m.getPage(), 1);
            });
        });

        describe('#setPage', function () {
            it('should change page', function () {
                var m = module();
                m.setPage(2);
                assert.equal(m.getPage(), 2);
            });
        });

        describe('#setPage', function () {
            it('should not set wrong page', function () {
                var m = module();
                m.setPage(3);
                assert.equal(m.getPage(), 2);

                m.setPage(0);
                assert.equal(m.getPage(), 1);
            });
        });

        describe('#setPage', function () {
            it('should change index of first showed item', function () {
                var m = module();
                m.setPage(2);
                assert.equal(m.getFrom(), 13);
            });
        });

        describe('#setPage', function () {
            it('should change index of last showed item', function () {
                var m = module();
                m.setPage(2);
                assert.equal(m.getTo(), 13);
            });
        });

        describe('#getFrom', function () {
            it('should return index of first showed item', function () {
                var m = module();
                assert.equal(m.getFrom(), 1);
                m.setData(1, 0);
                assert.equal(m.getFrom(), 0);
            });
        });

        describe('#getTo', function () {
            it('should return index of last showed item', function () {
                var m = module();
                assert.equal(m.getTo(), 12);
            });
        });

        describe('#setData', function () {
            it('should change page and count', function () {
                var m = module();
                m.setData(3, 35);
                assert.equal(m.getPage(), 3);
                assert.equal(m.getCount(), 35);
            });
        });

        describe('#setData', function () {
            it('should fire render', function () {
                var m = module();
                m.setData(3, 35);
                assert.equal(m.o.block.find('.js-short-pagination__current').text(), '25-35');
                assert.equal(m.o.block.find('.js-short-pagination__total').text(), 35);
            });
        });

        describe('#gotoPage', function () {
            it('should fire render', function () {
                var m = module();
                m.gotoPage(2);
                assert.equal(m.o.block.find('.js-short-pagination__current').text(), '13-13');
                assert.equal(m.o.block.find('.js-short-pagination__total').text(), 13);
            });
        });

        describe('ui', function () {
            describe('Click next', function () {
                it('should set next page', function () {
                    var m = module();
                    assert.equal(m.getPage(), 1);
                    m.o.block.find('.js-short-pagination__next').trigger('click');
                    assert.equal(m.getPage(), 2);
                });
            });

            describe('Click prev', function () {
                it('should set prev page', function () {
                    var m = module();
                    m.setPage(2);
                    assert.equal(m.getPage(), 2);
                    m.o.block.find('.js-short-pagination__prev').trigger('click');
                    assert.equal(m.getPage(), 1);
                });
            });
        });
    });

    if (window.mochaPhantomJS) {
        mochaPhantomJS.run();
    } else {
        mocha.run();
    }

});
