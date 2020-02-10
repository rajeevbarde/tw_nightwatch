const chromedriver = require("chromedriver");
const geckodriver = require('geckodriver');

const nwConfig =
{
  "src_folders": [""],
  "output_folder": "Result",
  "custom_commands_path": "",
  "custom_assertions_path": "",
  "page_objects_path": "",

  "use_xpath": true,
  "end_session_on_fail": false,
  "skip_testcases_on_fail": false,

  "globals_path": "global.js",
  "live_output": true,
  "disable_colors": false,

  "screenshots": {
    "enabled": true,
    "on_failure": true,
    "on_error": true,
    "path": "Result"
  },

  "webdriver": {
    "start_process": true,
    "port": 9515,
    "default_path_prefix": "",
  },

  "test_settings": {
    "default": {
      "webdriver": {
        "server_path": chromedriver.path
      },

      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions": {},
        "loggingPrefs": {
          "browser": "ALL"
        }
      }
    },//default
  } //test_settings
}

module.exports = nwConfig;