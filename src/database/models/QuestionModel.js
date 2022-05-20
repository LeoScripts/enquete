const { Model,DataTypes } = require('sequelize');

class Question extends Model {
    static init(sequelize){
        super.init({
            id:{
                type:DataTypes.STRING,
                primaryKey:true,
                allowNull:false
            },
            name:{
                type:DataTypes.STRING,
                allowNull:false
            },
            start:{
                type:DataTypes.STRING,
                allowNull:false
            },
            end:{
                type:DataTypes.STRING,
                allowNull:false
            },
        },{
            sequelize,
            tableName:'questions'

        });
    }
}

module.exports = Question;