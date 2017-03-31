var _ = require('lodash');

var localEnvVars = {
  TITLE:      'Western Chrstian Schools',
  SAFE_TITLE: 'WCS',
  superSecret: 'templateforever'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
