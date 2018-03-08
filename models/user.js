export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      username: {
        type: DataTypes.STRING,
        unique: true
      },

      email: {
        type: DataTypes.STRING,
        unique: true
      },

      password: {
        type: DataTypes.STRING,
        unique: true
      }
    },
    { underscored: true }
  );

  User.associate = models => {
    User.belongsToMany(models.Team, {
      through: "member",
      foreignKey: {
        name: "userId",
        field: "user_id"
      }
    });
  };

  return User;
};
