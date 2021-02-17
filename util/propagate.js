module.exports = function propagate(collection, pathToCommands) {
  // console.log(collection, pathToCommands)
  /* IMPORTS */
  const fs = require("fs");
  const path = require("path");

  const files = fs.readdirSync(pathToCommands);

  /* EVENT LOOP */
  for(file of files) {
    const pathToFile = path.join(pathToCommands, file);
    const isFile = !fs.lstatSync(pathToFile).isDirectory();

    if(!isFile) {
      propagate(collection, pathToFile)
      continue;
    };
    // console.log(file, pathToFile, isFile)

    const command = require(pathToFile);
    collection.set(command.name, command);
  }
}