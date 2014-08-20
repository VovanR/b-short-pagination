/**
 * @author VovanR [mail@vovanr.com]
 */

require(['./common'], function (common) {

    var app;

    require(['./apps/main-app'], function (App) {
        app = new App();
    });

});
