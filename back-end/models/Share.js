module.exports = (sequelize, DataTypes) => {
  const Share = sequelize.define('Share', {
    share_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    company_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Company",
        key: "company_id"
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    previous_day_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    recorded_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    timestamps: false,
    tableName: 'Share'
  });

  Share.associate = (models) => {
    Share.belongsTo(models.Company, { foreignKey: 'company_id' });
    Share.belongsToMany(models.PortfolioItem, {
      through: 'SharePortfolioItems',
      foreignKey: "share_id",
      otherKey: "portfolio_item_id",
      as: "portfolio"
    });
    Share.belongsToMany(models.Scenario, {
      through: 'ScenarioShares',
      foreignKey: 'share_id',
      otherKey: 'scenario_id',
      as: 'scenarios' // Use 'scenarios' as alias
    });
  };

  return Share;
};