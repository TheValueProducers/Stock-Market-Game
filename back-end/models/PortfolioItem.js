module.exports = (sequelize, DataTypes) => {
    const PortfolioItem = sequelize.define('PortfolioItem', {
      portfolio_item_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      portfolio_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Portfolios',
          key: 'portfolio_id',
        },
      },
      share_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'Shares',
          key: 'share_id',
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_value: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    }, {
      timestamps: false,
      tableName: 'PortfolioItem',
    });
  
    PortfolioItem.associate = (models) => {
      PortfolioItem.belongsToMany(models.Share, {
        through: 'SharePortfolioItems',
        foreignKey: "portfolio_item_id",
        otherKey: "share_id",
        as: "shares"
      })
      PortfolioItem.belongsTo(models.Portfolio, { foreignKey: 'portfolio_id' });
      PortfolioItem.belongsTo(models.Share, { foreignKey: 'share_id' });
    };
  
    return PortfolioItem;
  };