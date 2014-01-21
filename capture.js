var system = require('system');
if (system.args.length !== 2) {
  console.log('Missing argument: absolute URL.');
}

var page = require('webpage').create();
page.open(system.args[1], function() {
  page.render('screenshot_' + (new Date()).getTime() + '.png');
  phantom.exit();
});
