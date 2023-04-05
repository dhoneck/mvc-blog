const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const User = require('./User');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
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
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false, // TODO: Keep or remove?
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
