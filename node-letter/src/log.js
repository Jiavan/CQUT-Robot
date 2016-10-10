var fs = require('fs');

var log = function (logpath, msg) {
  fs.open(logpath, 'a', function (err, fd) {
    if (err) {
      console.log(err);
      return;
    }

    fs.write(fd, msg, function (err) {
      if (err) {
        console.log(err);
      }
    })
  });
};

var logPageState = function (msg) {
  log('../log/spider.pageState.log', msg)
};

logPageState(process.argv.slice(2)[0]);

module.exports = {
  logPageState
};
