const { Model,DataTypes } = require('sequelize');

class Question extends Model {
    static init(sequelize){
        super.init({
            id:{
                type:DataTypes.STRING,
                primaryKey:true,
                allowNull:false
            },
            question:{
                type:DataTypes.STRING,
                allowNull:false
            },
            answer:{
                type:DataTypes.STRING,
                allowNull:false
            }
        },{
            sequelize,
            tableName:'questions'

        });
    }
}

module.exports = Question;