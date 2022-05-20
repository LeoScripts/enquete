const { Model,DataTypes } = require('sequelize');

class Answer extends Model {
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
            tableName:'answers'

        });
    }
}

module.exports = Answer;