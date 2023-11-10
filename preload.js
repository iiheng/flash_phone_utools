window.execCmd = function(command, callback) {
    const { exec } = require('child_process');
    exec(command, (error, stdout, stderr) => {
        if (callback) {
            callback(error, stdout, stderr);
        }
    });
};
