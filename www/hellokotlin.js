"use strict";

var exec = require('cordova/exec');

var HelloKotlin = {
	hello: function (args, successCallback, errorCallback) {
		exec(successCallback, errorCallback, "HelloKotlin", "hello", [args]);
    }
};

module.exports = HelloKotlin;
