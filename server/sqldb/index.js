/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment/development';
import Sequelize from 'sequelize';
var db = {
    Sequelize: Sequelize,
    sequelize: new Sequelize(config.sequelize.database, config.sequelize.username, config.sequelize.password, config.sequelize.options)

};
// Insert models below

db.Thing = db.sequelize.import('../api/thing/thing.model');

module.exports = db;