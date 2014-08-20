requirejs(['../js/common']);
requirejs([
    '../js/modules/short-pagination',
], function(
    ShortPagination
) {

    'use strict';

    QUnit.start();

    QUnit.test('ShortPagination module', function (assert) {
        var sp = new ShortPagination({
            count: 13,
        });

        assert.ok(sp.o.block, 'Should have block');
        assert.equal(sp.getCount(), 13, 'Should return count');
    });

});
