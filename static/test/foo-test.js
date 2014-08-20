requirejs([
    '../js/modules/foo',
], function(
    Foo
) {

    'use strict';

    QUnit.start();

    test('Foo module', function () {
        var foo = new Foo();

        equal(foo.getName(), 'Foo', 'Module name is Foo');
    });

});
