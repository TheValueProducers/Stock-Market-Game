module.exports = (sequelize, DataTypes) => {
    const Gameplay = sequelize.define('Gameplay', {
      gameplay_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      game_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      timestamps: false,
      tableName: 'Gameplay'
    });
  
    Gameplay.associate = (models) => {
      Gameplay.hasMany(models.Scenario, { foreignKey: 'gameplay_id', as: 'scenarios' });
      GamePlay.belongsToMany(models.Game, {
        through: 'GameGameplay',
        foreignKey: 'gameplay_id',
      });
    };
  
    return Gameplay;
  };
  