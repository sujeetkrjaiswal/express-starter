"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
exports.log = (...args) => {
    console.log('Log : ', ...args);
};
exports.logInfo = (...args) => {
    exports.log(chalk_1.default.bgBlueBright('Info : ', ...args));
};
exports.logError = (...args) => {
    exports.log(chalk_1.default.red('Error : ', ...args));
};
exports.logSuccess = (...args) => {
    exports.log(chalk_1.default.green('Success : ', ...args));
};
