

module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define('Game', {
      game_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      game_code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      host: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [["IGCSE", "AS-Level", "A-Level"]]
        }
      },
      time_duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isIn: [["10", "15", "30"]]
        }
      }
      ,
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      end_at: {
        type: DataTypes.DATE,
      },
    }, {
      timestamps: false,
      tableName: "Game"
    });
    Game.associate = function(models) {
      Game.hasOne(models.GamePlay, { foreignKey: 'game_id' });
    };
  
    return Game;
  };