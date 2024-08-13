const { UUIDV4 } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Share = sequelize.define('Share', {
    share_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: "Share"
  });

  Share.associate = (models) => {
    Share.belongsToMany(models.Gameplay, { through: 'GameplayShares', foreignKey: 'share_id' });
  };

  return Share;
};