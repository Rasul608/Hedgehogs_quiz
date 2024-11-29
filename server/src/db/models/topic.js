"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    static associate(models) {
      this.hasMany(models.Question, { foreignKey: "topic_id" });
    }
  }
  Topic.init(
    {
      img: DataTypes.STRING,
      title: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Topic",
    }
  );
  return Topic;
};
