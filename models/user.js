// models/user.js
const {Model, DataTypes} = require("sequelize")
const bcrypt = require("bcrypt")
const sequelize = require("../config/connection")

class User extends Model {
  checkPassword(login){
    return bcrypt.compareSync(login, this.password)
  }
}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (newUser) => {
        newUser.password = await bcrypt.hash(newUser.password, 10)
        return newUser
      },
      beforeUpdate: async (updateUser) => {
        updateUser.password = await bcrypt.hash(updateUser.password, 10)
        return updateUser
      },
    },
    sequelize,timestamps: false, freezeTableName: true, underscored: true, modelName: "User"
  }
)
module.exports = User


