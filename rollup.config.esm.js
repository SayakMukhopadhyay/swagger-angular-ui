import rollupConfig from './rollup.config.umd.js';
const config = require('./config-library.js');

rollupConfig.format = "es";
rollupConfig.dest = config.PATH_DIST + config.nameLibrary + ".esm.js";

export default rollupConfig;
