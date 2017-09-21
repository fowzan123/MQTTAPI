'use strict';

// Development specific configuration
// ==================================
module.exports = {

    // Sequelize connecton opions
    sequelize: {
        database: "mqtt",
        username: "postgres",
        password: "untrodden123",

        // username: "muffin_db",
        // password: "muffindb123",
        options: {
            host: process.env.POSTGRESQL_LOCAL_HOST,
            // host: "postgres.cbsw0q944uax.us-east-1.rds.amazonaws.com",
            dialect: 'postgres',
            define: {
                timestamps: false
            },
            freezeTableName: true,
            pool: {
                max: 9,
                min: 0,
                idle: 10000
            }
        }
    },

    // Seed database on startup
    seedDB: false

};