module.exports = {
  // HOST: process.env.POSTGRES_HOST,
  // USER: process.env.POSTGRES_USER,
  // PASSWORD: process.env.POSTGRES_ROOT_PASSWORD,
  // DB: process.env.POSTGRES_DATABASE,
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "root42",
  DB: "db_contato",
  dialect: "postgres",
  port: "5432",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};