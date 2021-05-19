"use strict";

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @vendors and setup
if (!global.fetch) {
  global.fetch = _nodeFetch.default;
}

const result = _dotenv.default.config();

if (result.error) {
  throw result.error;
} // start server


_app.default.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});