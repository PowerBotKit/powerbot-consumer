'use strict';
const { tasks } = require('./tools/task');

module.exports = {
	hooks: {
		'pre-push': tasks(['yarn lint', 'yarn build', 'yarn audit']),
		'pre-commit': 'lint-staged',
		'commit-msg': 'commitlint -e $HUSKY_GIT_PARAMS'
	}
};
