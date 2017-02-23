module.exports = function(shipit) {
	require('./lib/env')(shipit);
	require('./lib/tasks')(shipit);
};
