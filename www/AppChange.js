/*global cordova*/

var exec = require("cordova/exec");

var AppChange = function(){};

AppChange.prototype.check = function (uri, id successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "AppChange", "check", [uri, id]);
};
AppChange.prototype.GOapprul = function (Scheme, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "AppChange", "goAPPurl", Scheme]);
};
AppChange.prototype.OPENapp = function (Scheme, mgs successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "AppChange", "toAPPopen", [Scheme, mgs]);
};
AppChange.prototype.INport = function (successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "AppChange", "Inport", []);
};

module.exports = new AppChange();
