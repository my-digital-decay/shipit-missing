#shipit-missing
Provides the functionality I find missing from shipit.

###Features:
- Adds a `shipit:env` task for easily displaying an environment's settings.
- Adds a `shipit:tasks` task for easily displaying the tasks available in an environment.

##Usage
###Example shipitfile.js

	module.exports = function (shipit) {
		require('shipit-missing')(shipit);

		shipit.initConfig({
			sample: {
				servers: []
			}
		);

Display the settings for an environment:

	$ shipit sample shipit:env

	Running 'shipit:env' task...
	Shipit Environment: sample
	{ branch: 'master',
	  keepReleases: 5,
	  shallowClone: false,
	  servers: [] }
	Finished 'shipit:env' after 3 ms

List the available tasks for an environment:

	$ shipit sample shipit:tasks

	Running 'shipit:tasks' task...
	Available Tasks:
	  shipit:env
	  shipit:tasks
	Finished 'shipit:tasks' after 729 μs

##License
MIT
