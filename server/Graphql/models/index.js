import Sequelize from "sequelize";

const sequelize = new Sequelize("emploeur", "root", "Daredevils_11", {
  dialect: "mysql"
});

// var Task = connection.define(
//   "tasks",
//   {
//     id: {
//       type: Sequelize.INTEGER,
//       unique: true,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     title: { type: Sequelize.STRING },
//     task_id: Sequelize.STRING,
//     title: Sequelize.STRING,
//     start_date: Sequelize.DATE,
//     due_date: Sequelize.DATE,
//     start_time: Sequelize.TIME,
//     end_time: Sequelize.TIME,
//     status: { type: Sequelize.STRING, defaultValue: "PENDING" },
//     priority: Sequelize.TINYINT,
//     description: Sequelize.TEXT
//   },
//   { freezeTableName: true, timestamps: false }
// );

// connection.sync().then(function() {
//   Task.findAll().then(function(articles) {
//     console.log(articles);
//   });
// });
const models = {
  Address: sequelize.import("./Address"),
  PlaceCode: sequelize.import("./PlaceCode"),
  Apartment: sequelize.import("./Apartment")
};

Object.keys(models).forEach(key => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;
// export { sequelize };
export default models;
