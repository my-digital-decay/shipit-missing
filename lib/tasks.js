module.exports = function(shipit) {
	shipit.task('shipit:tasks', function() {
		shipit.log('Available Tasks: ');
		Object.keys(shipit.tasks).forEach(t => shipit.log('  ' + t));
	});
};
