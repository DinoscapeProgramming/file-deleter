const fs = require('fs');

function deleteDirectory(dir) {
  var path;
  if (dir === __dirname) {
    path = "./";
  } else {
    path = dir + "/"
  }
  fs.readdirSync(dir).forEach(file => {
    if (fs.statSync(path + file).isFile()) {
      fs.unlinkSync(path + file)
    } else {
      deleteDirectory(path + file)
    }
  })
  if (dir !== __dirname) {
    fs.rmdirSync(dir)
  }
}

deleteDirectory(__dirname)
