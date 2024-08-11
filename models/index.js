// import all models here
const User = require("./User");
const ExampleData = require("./Friends");
const { classToInvokable } = require("sequelize/types/utils");

// Reminder- create any additional associations here
//User Associations
User.hasMany(Post, { foreignKey: 'userId' });
User.hasMany(Friendship, { foreignKey: 'userId1' });
User.hasMany(Friendship, { foreignKey: 'userId2' });
User.hasMany(FanArt, { foreignKey: 'userId' });
User.hasMany(Feed, { foreignKey: 'userId' });

//friends association
User.belongsToMany(User, { as: 'Friends', through: Friendship, foreignKey: 'userId1', otherKey: 'userId2' });
Friendship.belongsTo(User, { as: 'User1', foreignKey: 'userId1' });
Friendship.belongsTo(User, { as: 'User2', foreignKey: 'userId2' });

//feed association
Post.belongsTo(User, { foreignKey: 'userId' });
Post.hasMany(Comment, { foreignKey: 'postId' });
Comment.belongsTo(Post, { foreignKey: 'postId' });


//clan association
Clan.hasMany(Users, { foreignKey: 'userId' });
Clan.hasMany(Post, { foreignKey: 'postId' });





// export all models here
module.exports = { User, ExampleData };
