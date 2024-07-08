module.exports = (sequelize, DataTypes) => {
    const Portfolio = sequelize.define('Portfolio', {
      portfolio_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      player_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Players',
          key: 'player_id',
        },
      },
    }, {
      timestamps: false,
    });
  
    Portfolio.associate = (models) => {
      Portfolio.belongsTo(models.Player, { foreignKey: 'player_id' });
      Portfolio.hasMany(models.PortfolioItem, { foreignKey: 'portfolio_id' });
    };
  
    return Portfolio;
  };