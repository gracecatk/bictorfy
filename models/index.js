const User = require("./user")
const Song = require("./song")

Song.belongsTo(User, {
    foreignKey: "userId",
    onDelete: "CASCADE"
})

User.hasMany(Song, {
    foreignKey: "userId",
})


module.exports = {
    User, Song
}