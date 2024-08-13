module.exports = (sequelize, DataTypes) => {
    const GameplayShares = sequelize.define('GameplayShares', {
      game_play_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        references: {
          model: 'Gameplay',
          key: 'game_play_id'
        },
        onDelete: 'CASCADE'
      },
      share_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        references: {
          model: 'Share',
          key: 'share_id'
        },
        onDelete: 'CASCADE'
      }
    }, {
      timestamps: false,
      tableName: "GameplayShares"
    });
  
    GameplayShares.associate = (models) => {
      GameplayShares.belongsTo(models.Gameplay, { foreignKey: 'game_play_id' });
      GameplayShares.belongsTo(models.Share, { foreignKey: 'share_id' });
    };
  
    return GameplayShares;
  };