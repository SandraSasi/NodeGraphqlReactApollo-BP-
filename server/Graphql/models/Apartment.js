export default (sequelize, DataTypes) => {
  var Apartment = sequelize.define(
    "apartment",
    {
      TableId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      FlatId: { type: DataTypes.STRING, primaryKey: true },
      FlatName: DataTypes.STRING,
      AddressId: DataTypes.STRING,
      Manager: DataTypes.STRING,
      FlatShortName: DataTypes.STRING,
      FlatPhone: DataTypes.STRING,
      FlatDescription: DataTypes.STRING
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  Apartment.associate = models => {
    Apartment.hasOne(models.Address, { foreignKey: "AddressId" });
  };
  return Apartment;
};
