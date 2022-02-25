const Connection = require('./Connection')
const {DataTypes} = require("sequelize")


const Auth = Connection.define("auth",{
    name:{
        type:DataTypes.STRING,
        allowNull:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:true
    },
    photoUrl:{
        type:DataTypes.STRING,
        allowNull:true
    },
    bio:{
        type:DataTypes.STRING,
        allowNull:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

Auth.sync()

module.exports = Auth