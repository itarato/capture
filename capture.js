var system = require('system');
if (system.args.length !== 3) {
  console.log('Missing argument: [1:] absolute URL [2:] name.');
}

var page = require('webpage').create();
page.open(system.args[1], function() {
  page.render('screenshot/' + system.args[2] + '_' + (new Date()).getTime() + '.png');
  phantom.exit();
});
