const { UUIDV4 } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Scenario = sequelize.define('Scenario', {
    scenario_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4
    },
    game_play_id: {
      type: DataTypes.UUID,
      references: {
        model: 'Gameplay',
        key: 'game_play_id'
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    event_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: "Scenario"
  });

  Scenario.associate = (models) => {
    Scenario.belongsTo(models.Gameplay, { foreignKey: 'game_play_id' });
  };

  return Scenario;
};