const Services = require("./client/shared/shim/Services");
const SplitBox = require("./client/shared/components/splitter/SplitBox");
// const SplitBoxCSS = require("./client/shared/components/splitter/SplitBox.css")
const sprintf = require("./shared/sprintf").sprintf;
const workerUtils = require("./shared/worker-utils");

module.exports = {
  Services,
  SplitBox,
  // SplitBoxCSS,
  sprintf,
  workerUtils,
};
