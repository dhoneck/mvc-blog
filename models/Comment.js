const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const User = require('./User');
const Post = require('./Post');


class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: sequelize.NOW
    },
    user_id: {
      type: DataTypes.INTEGER,
      refrences: {
        model: User,
        key: 'id',
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      refrences: {
        model: Post,
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false, // TODO: Keep or remove?
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
