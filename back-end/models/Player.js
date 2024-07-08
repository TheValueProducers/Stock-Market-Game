module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define('Player', {
      player_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
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
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      joined_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      balance_without_shares: {
        type: DataTypes.FLOAT,
        defaultValue: 10000,
      },
    }, {
      timestamps: false,
    });
  
    Player.associate = (models) => {
      Player.belongsTo(models.Game, { foreignKey: 'game_id' });
    };
  
    return Player;
  };