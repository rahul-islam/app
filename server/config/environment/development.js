'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://admin:admin@ds139869.mlab.com:39869/madarchodharamkhor'
  },

  // Seed database on startup
  seedDB: false

};
