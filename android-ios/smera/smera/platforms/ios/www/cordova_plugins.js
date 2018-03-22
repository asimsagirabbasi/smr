cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-firebase.FirebasePlugin",
    "file": "plugins/cordova-plugin-firebase/www/firebase.js",
    "pluginId": "cordova-plugin-firebase",
    "clobbers": [
      "FirebasePlugin"
    ]
  },
  {
    "id": "cordova-plugin-googleplus.GooglePlus",
    "file": "plugins/cordova-plugin-googleplus/www/GooglePlus.js",
    "pluginId": "cordova-plugin-googleplus",
    "clobbers": [
      "window.plugins.googleplus"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "nl.x-services.plugins.toast.Toast",
    "file": "plugins/nl.x-services.plugins.toast/www/Toast.js",
    "pluginId": "nl.x-services.plugins.toast",
    "clobbers": [
      "window.plugins.toast"
    ]
  },
  {
    "id": "nl.x-services.plugins.toast.tests",
    "file": "plugins/nl.x-services.plugins.toast/test/tests.js",
    "pluginId": "nl.x-services.plugins.toast"
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-firebase": "0.1.25",
  "cordova-plugin-googleplus": "5.2.1",
  "cordova-plugin-inappbrowser": "2.0.1",
  "cordova-plugin-splashscreen": "5.0.1",
  "cordova-plugin-whitelist": "1.3.3",
  "nl.x-services.plugins.toast": "2.5.2"
};
// BOTTOM OF METADATA
});