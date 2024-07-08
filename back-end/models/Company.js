module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
      company_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      sector: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      market_cap: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      revenue: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      gross_profit_margin: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      return_on_equity: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      earnings_per_share: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      debt_to_equity_ratio: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    }, {
      timestamps: false,
    });
  
    Company.associate = (models) => {
      Company.hasMany(models.Share, { foreignKey: 'company_id' });
    };
  
    return Company;
  };