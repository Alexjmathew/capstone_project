'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coursesCreated extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      coursesCreated.belongsTo(models.User,{
        foreignKey:"educatorId",
      });
      coursesCreated.hasMany(models.coursesEnrolled, {
        foreignKey: "courseId",
        onDelete:'CASCADE',
      });
      coursesCreated.hasMany(models.chapter, {
        foreignKey: "courseId",
        onDelete:'CASCADE',
      });
      coursesCreated.hasMany(models.page, {
        foreignKey: "courseId",
        onDelete:'CASCADE',
      });
      coursesCreated.hasMany(models.pageCompletion, {
        foreignKey: "courseId",
        onDelete:'CASCADE',
      });
    }

  
  }
  coursesCreated.init({
    courseName: DataTypes.STRING,
    report: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'coursesCreated',
  });
  return coursesCreated;
};