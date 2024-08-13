const { UUIDV4 } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const GamesGameplays = sequelize.define('GamesGameplays', {
    game_id: {
      type: DataTypes.UUID,
      references: {
        model: 'Game',
        key: 'game_id'
      }
    },
    game_play_id: {
      type: DataTypes.UUID,
      references: {
        model: 'Gameplay',
        key: 'game_play_id'
      }
    }
  }, {
    timestamps: false
  });

  return GamesGameplays;
};