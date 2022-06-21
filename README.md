![npm](https://img.shields.io/npm/dt/cordova-plugin-hello-kotlin) ![npm](https://img.shields.io/npm/v/cordova-plugin-hello-kotlin) ![GitHub package.json version](https://img.shields.io/github/package-json/v/andreszs/cordova-plugin-hello-kotlin?color=FF6D00&label=master&logo=github) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/andreszs/cordova-plugin-hello-kotlin) ![GitHub top language](https://img.shields.io/github/languages/top/andreszs/cordova-plugin-hello-kotlin) ![GitHub](https://img.shields.io/github/license/andreszs/cordova-plugin-hello-kotlin) ![GitHub last commit](https://img.shields.io/github/last-commit/andreszs/cordova-plugin-hello-kotlin)

# cordova-plugin-hello-kotlin

A simple example of a Cordova plugin that uses Kotlin (instead of Java) to implement the native Cordova plugin interface on Android.

## Requirements

- Cordova Android 9.0.0

## Install

Install from NPM:

```bash
  cordova plugin add cordova-plugin-hello-kotlin
```

The plugin will add these settings into your project's **config.xml** file:

- `GradlePluginKotlinEnabled = true`
- `GradlePluginKotlinVersion = 1.5.20`

## Test method

This sample plugin provides a single **hello** method added to the **cordova.plugins** scope.

```javascript
var onSuccess = function(output){
	console.log(output);
};
var onFailure = function(output){
	console.error(output);
}
cordova.plugins.HelloKotlin.hello("Plugin Test", onSuccess, onFailure);
```

## Test app screenshot

![Cordova Kotlin Plugin Test](https://github.com/andreszs/cordova-plugin-hello-kotlin/blob/master/screenshots/cordova-plugin-hello-kotlin.png?raw=true "Cordova Kotlin Plugin Test")