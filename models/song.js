// models/song.js
const {Model, DataTypes} = require("sequelize")
const sequelize = require("../config/connection")
class Song extends Model {}
Song.init(
    {
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        artist: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,timestamps: false, freezeTableName: true, underscored: true, modelName: "Song"
      }
)
  
    module.exports = Song