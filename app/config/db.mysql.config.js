module.exports = {
  // HOST: process.env.MYSQL_HOST,
  // USER: process.env.MYSQL_USER,
  // PASSWORD: process.env.MYSQL_ROOT_PASSWORD,
  // DB: process.env.MYSQL_DATABASE,
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root42",
  DB: "db_contato",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};