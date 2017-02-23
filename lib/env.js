var util = require('util');

module.exports = function(shipit) {
	shipit.task('shipit:env', function() {
		shipit.log('Shipit Environment: ' + shipit.environment);
		shipit.log(util.inspect(shipit.config));
	});
}


