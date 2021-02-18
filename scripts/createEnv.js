const fs = require("fs");
const path = require("path");

/**
 * Gets base directory.
 * Should always be the project home.
 * @returns {string} base
 */
function getBaseDir() {
  const base = path.dirname(__dirname);
  return base;
}

/**
 * Validates if given path is project root.
 * @param {string} base
 * @returns {boolean} hasPackageJson
 */
function isHomeDir(base) {
  const hasPackageJson = fs.readdirSync(base).includes("package.json");
  return hasPackageJson;
}

/**
 * Validates existance of given file in fiven root path.
 * @returns {boolean}
 */
function hasFile(root, filename) {
  return fs.existsSync(path.join(root, filename));
}

/**
 * Warns user something went wrong.
 * @returns {int} process.exit
 */
function exitFileExists() {
  console.log(
    "==================================================================================="
  );
  console.warn("FILE EXISTS!");
  console.log("To create a new copy, please remove *.env*");
  console.log("If you remove *.env* all your sensible data will be lost!");
  console.log(
    "==================================================================================="
  );
  return process.exit(1);
}

/**
 * Copies content from `from` to `to`.
 * @param {string} from path where content should be copied from
 * @param {string} to path where content should be copied to
 */
function copyFileTo(from, to) {
  try {
    const content = fs.readFileSync(from, "ascii");
    fs.writeFileSync(to, content);
  } catch (err) {
    console.error(err);
    console.log("Something went wrong trying to copy the file.\n Exiting...");
  }
}

/**
 * Runs script.
 */
(function init() {
  const base = getBaseDir();
  const SAMPLE = "SAMPLE.env";
  const TARGET = ".env";

  /* Validate home directory */
  /* home directory = project home */
  if (!isHomeDir(base)) throw new Error("Not in the home directory");

  if (hasFile(base, TARGET)) return exitFileExists();
  else return copyFileTo(path.join(base, SAMPLE), path.join(base, TARGET));
})();
