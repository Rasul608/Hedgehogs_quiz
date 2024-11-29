"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate(models) {
      this.belongsTo(models.Question, {
        foreignKey: "question_id",
      });
    }
  }
  Answer.init(
    {
      answer: DataTypes.TEXT,
      is_true: DataTypes.BOOLEAN,
      question_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Answer",
    }
  );
  return Answer;
};
