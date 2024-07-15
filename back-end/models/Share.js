module.exports = (sequelize, DataTypes) => {
    const Share = sequelize.define('Share', {
      share_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      company_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'Companies',
          key: 'company_id',
        },
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
    });
  
    Share.associate = (models) => {
      Share.belongsTo(models.Company, { foreignKey: 'company_id' });
      Share.hasMany(models.Scenario, { foreignKey: 'share_id' });
    };
  
    return Share;
  };