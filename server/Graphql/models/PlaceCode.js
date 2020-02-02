export default (sequelize, DataTypes) => {
  const PlaceCode = sequelize.define(
    "placecode",
    {
      TableId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Town: DataTypes.STRING,
      City: DataTypes.STRING,
      District: DataTypes.STRING,
      Pincode: DataTypes.INTEGER,
      State: DataTypes.STRING,
      Country: DataTypes.STRING,
      PlaceCode: {
        type: DataTypes.STRING,
        primaryKey: true,
        default: "PENDING"
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  return PlaceCode;
};
