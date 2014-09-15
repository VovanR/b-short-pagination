/**
 * @author VovanR [mail@vovanr.com]
 */

if (!requirejs.config.baseUrl) {
    requirejs.config.baseUrl = '../js/';
}

requirejs.config({
    baseUrl: requirejs.config.baseUrl,
    paths: {
        jquery: '../vendor/jquery/dist/jquery',
        underscore: '../vendor/underscore/underscore',
    },
});
