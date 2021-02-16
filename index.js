const fs = require('fs');
fs.readdir('../files_folders', 'UTF-8', (err, files) => {
	if (err) {
		throw Error;
	} else {
		files.forEach((file) => {
			fs.stat(file, (err, stats) => {
				if (stats.isDirectory()) {
					console.log(file + '=>It is a Folder');
				} else {
					console.log(file + '=> It is a File');
				}
			});
		});
	}
});
