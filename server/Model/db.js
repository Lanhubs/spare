import Sequelize from "sequelize";
const sequelize = new Sequelize("Spare", "root", "Lanhubs2001$$", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  // database: "Finale"
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  silent: true,
  logging: false,
});

sequelize
.authenticate()
.then(() => console.log("Database connected successfully"))
.catch((err) => {
  console.log(err);
});

sequelize.sync({ force: true, alter: true   });


export { sequelize, Sequelize };
