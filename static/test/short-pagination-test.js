requirejs([
    '../js/modules/short-pagination',
], function(
    ShortPagination
) {

    'use strict';

    QUnit.start();

    test('ShortPagination module', function () {
        var shortPagination = new ShortPagination();

        equal(shortPagination.getName(), 'ShortPagination', 'Module name is ShortPagination');
    });

});
