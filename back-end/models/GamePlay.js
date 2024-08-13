const { UUIDV4 } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Gameplay = sequelize.define('Gameplay', {
    game_play_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4
    },
    period_name: {
      type: DataTypes.STRING,
      unique: true
    }
    ,
    start_event_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_event_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: "Gameplay"
  });

  Gameplay.associate = (models) => {
    Gameplay.belongsToMany(models.Share, { through: 'GameplayShares', foreignKey: 'game_play_id' });
    Gameplay.belongsToMany(models.Game, { through: 'GamesGameplays', foreignKey: 'game_play_id' });
    Gameplay.hasMany(models.Scenario, { foreignKey: 'game_play_id' });
  
  };

  return Gameplay;
};