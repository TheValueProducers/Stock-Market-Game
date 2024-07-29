'use strict';
module.exports = (sequelize, DataTypes) => {
  const GameGamePlays = sequelize.define('GameGameplay', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    game_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gameplay_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });

  return GameGamePlays;
};