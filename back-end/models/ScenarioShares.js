module.exports = (sequelize, DataTypes) => {
  const ScenarioShares = sequelize.define('ScenarioShares', {
    scenario_share_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    scenario_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Scenario',
        key: 'scenario_id',
      },
    },
    share_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Share',
        key: 'share_id',
      },
    },
  }, {
    timestamps: false,
    tableName: "ScenarioShares"
  });

  return ScenarioShares;
};