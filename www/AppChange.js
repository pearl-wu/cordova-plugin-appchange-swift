/*global cordova*/

var exec = require("cordova/exec");

var Hello = function(){};

Hello.prototype.check = function (uri, id successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "AppChange", "check", [uri, id]);
};
Hello.prototype.GOapprul = function (Scheme, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "AppChange", "goAPPurl", Scheme]);
};
Hello.prototype.OPENapp = function (Scheme, mgs successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "AppChange", "toAPPopen", [Scheme, mgs]);
};
Hello.prototype.INport = function (successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "AppChange", "Inport", []);
};

module.exports = new Hello();
