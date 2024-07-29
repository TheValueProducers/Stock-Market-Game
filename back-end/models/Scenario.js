module.exports = (sequelize, DataTypes) => {
  const Scenario = sequelize.define('Scenario', {
    scenario_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['IGCSE', 'AS-Level', 'A-Level']],
      },
    },
    percentage_change_on_stock: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    percentage_change_on_bond: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    duration: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    timestamps: false,
    tableName: "Scenario"
  });

  Scenario.associate = (models) => {
    Scenario.belongsToMany(models.Share, {
      through: 'ScenarioShares',
      foreignKey: 'scenario_id',
      otherKey: 'share_id',
      as: 'shares' 
    });
    Scenario.belongsTo(models.Gameplay, { foreignKey: 'gameplay_id', as: 'gameplay' });
  };

  return Scenario;
};