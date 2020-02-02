export default (sequelize, DataTypes) => {
  var Apartment = sequelize.define("emp_rewrite_t_apartment", {
    building_id: {
      type: DataTypes.STRING,
      unique: true
    },
    building_short_name: DataTypes.STRING,
    building_full_name: DataTypes.STRING,
    building_address: DataTypes.STRING,
    building_geo_code: DataTypes.STRING,
    building_phone: DataTypes.INTEGER,
    building_description: DataTypes.STRING
  });

  Apartment.associate = models => {
    Apartment.belongsToMany(models.User, {
      //   through: "member",
      foreignKey: "building_id"
    });
  };

  return Apartment;
};
