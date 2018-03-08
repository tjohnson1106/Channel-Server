export default (sequelize, DataTypes) => {
  const Channel = sequelize.define("channel", {
    text: DataTypes.STRING,
    public: DataTypes.BOOLEAN
  });

  Channel.associate = models => {
    //1:M
    Channel.belongsTo(models.Team, {
      foreignKey: {
        name: "teamId",
        field: "team_id"
      }
    });
    // N to M
    Channel.belongsToMany(models.Team, {
      through: "channel_member",
      foreignKey: {
        name: "channelId",
        field: "channel_id"
      }
    });
  };
  return Channel;
};
