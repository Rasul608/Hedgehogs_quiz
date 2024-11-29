"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      this.belongsTo(models.Topic, { foreignKey: "topic_id" });
      this.hasMany(models.Answer, {
        foreignKey: "question_id",
      });
    }
  }
  Question.init(
    {
      img: DataTypes.STRING,
      question: DataTypes.TEXT,
      topic_id: DataTypes.INTEGER,
      currentAnswer: DataTypes.TEXT,
      answer1: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
