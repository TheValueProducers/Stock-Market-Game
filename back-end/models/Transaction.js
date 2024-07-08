module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
      transaction_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'user_id',
        },
      },
      type: {
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
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      game_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Games',
          key: 'game_id',
        },
      },
    }, {
      timestamps: false,
    });
  
    Transaction.associate = (models) => {
      Transaction.belongsTo(models.User, { foreignKey: 'user_id' });
      Transaction.belongsTo(models.Share, { foreignKey: 'share_id' });
      Transaction.belongsTo(models.Game, { foreignKey: 'game_id' });
    };
  
    return Transaction;
  };