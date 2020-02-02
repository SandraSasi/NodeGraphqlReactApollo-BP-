export default (sequelize, DataTypes) => {
  const Address = sequelize.define(
    "address",
    {
      TableId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      AddressName: DataTypes.STRING,
      Street: DataTypes.STRING,
      PostOffice: DataTypes.STRING,
      City: DataTypes.STRING,
      District: DataTypes.STRING,
      Pincode: DataTypes.INTEGER,
      State: DataTypes.STRING,
      Country: DataTypes.STRING,
      AddressId: { type: DataTypes.STRING, primaryKey: true },
      PlaceCode: {
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  return Address;
};
