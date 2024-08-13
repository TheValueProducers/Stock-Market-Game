const { UUIDV4 } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    player_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4
    },
    game_id: {
      type: DataTypes.UUID,
      references: {
        model: 'Game',
        key: 'game_id'
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    joined_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    timestamps: false
  });

  Player.associate = (models) => {
    Player.belongsTo(models.Game, { foreignKey: 'game_id' });
  };

  return Player;
};