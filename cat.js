const fs = require("fs");

// readFile('./')

module.exports = function (file) {
  fs.readFile(`${__dirname}/${file}`, (err, data) => {
    if (err) throw err;
    console.log(data.toString());
    process.stdout.write("\nprompt > ");
  });
};
