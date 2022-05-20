const passwordDB = process.env.DB_PASS;
const dbPort = process.env.DB_PORT;

module.exports = {
  username: 'root',
  password: passwordDB,
  database: 'enquete',
  host: '127.0.0.1',
  dialect: 'mysql',
  port: dbPort,
  define:{
    timestamps:false,
    underscored:true
  }
};
