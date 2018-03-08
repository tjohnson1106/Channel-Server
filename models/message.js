export default (sequelize, DataTypes) => {
  const Message = sequelize.define("message", {
    text: DataTypes.STRING
  });

  Message.associate = models => {
    // 1:M
    Message.belongsToMany(models.Channel, {
      foreignKey: "channelId"
    });
    Team.belongsTo(models.User, {
      foreignKey: "userId"
    });
  };

  return Message;
};
