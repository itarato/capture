/**
 * @file
 * PhantomJS script to virtually open the page and save a screenshot.
 */

// Load system module to handle arguments.
var system = require('system');
// Load page module for opening the URL.
var page = require('webpage').create();

// Open URL.
page.open(system.args[1], function() {
  // Save screenshot.
  page.render(system.args[2] + (new Date()).getTime() + '.png');
  // Finish.
  phantom.exit();
});
