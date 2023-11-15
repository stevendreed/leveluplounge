const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultVault: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      // autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 64]
      }
    },
    body: {
      type: DataTypes.STRING,
      validate: {
        len: [8, 1024]
      }
    },
    // unneeded: added timestamps to table
    // date_created: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: DataTypes.NOW,
    // },
    is_public: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    user_upvotes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    user_downvotes:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    user_id: {
      type: DataTypes.UUID,
      defaultVault: DataTypes.UUIDV4,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
