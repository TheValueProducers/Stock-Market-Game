const { UUIDV4 } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    game_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4
    },
    game_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.UUID,
      references: {
        model: 'User',
        key: 'user_id'
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    end_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    game_play_id: {
      type: DataTypes.UUID,
      references: {
        model: 'Gameplay',
        key: 'game_play_id'
      }
    }
  }, {
    timestamps: false,
    tableName: 'Game'
  });

  Game.associate = (models) => {
    Game.belongsTo(models.User, { foreignKey: 'user_id' });
    Game.belongsToMany(models.Gameplay, { through: 'GamesGameplays', foreignKey: 'game_id' });
    Game.hasMany(models.Player, { foreignKey: 'game_id' });
  };

  return Game;
};