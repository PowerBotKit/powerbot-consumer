const path = require('path');

module.exports = {
	'*.ts': filenames => {
		const lint = 'yarn lint --fix';
		const git = `git add ${filenames.join(' ')}`;
		return [lint, git];
	},
	'*.{html,md,json,yml,js}': filenames => {
		const prettier = `prettier --write -- ${filenames.join(' ')}`;
		const git = `git add ${filenames.join(' ')}`;
		return [prettier, git];
	}
};
