const config = require("../../config/db.postgres.config.js");
const Sequelize = require("sequelize");

console.log(`POSTGRES ${JSON.stringify(config)}`);

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db2 = {};
db2.Sequelize = Sequelize;
db2.sequelize = sequelize;

db2.contact = require("./contact.model.js")(sequelize, Sequelize);

module.exports = db2;
