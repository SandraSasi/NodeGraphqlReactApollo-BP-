import Sequelize from "sequelize";
const connection = new Sequelize("emploeur", "root", "Daredevils_11", {
  dialect: "mysql"
});
const PlaceCodeModel = connection.define(
  "placecode",
  {
    TableId: { type: Sequelize.INT, primaryKey: true, autoIncrement: true },
    Town: Sequelize.STRING,
    City: Sequelize.STRING,
    District: Sequelize.STRING,
    Pincode: Sequelize.INT,
    State: Sequelize.STRING,
    Country: Sequelize.STRING,
    PlaceCode: { type: Sequelize.STRING, primaryKey: true }
  },
  {
    freezeTableName: true
  }
);
const PlaceCode = connection.models.placecode;
// const Post =  connection.models.post;

export { PlaceCode };
