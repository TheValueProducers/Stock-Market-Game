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
      },
      share_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Shares',
          key: 'share_id',
        },
      },
      percentage_change: {
        type: DataTypes.FLOAT,
        allowNull: false,
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
    });
  
    Scenario.associate = (models) => {
      Scenario.belongsTo(models.Share, { foreignKey: 'share_id' });
    };
  
    return Scenario;
  };