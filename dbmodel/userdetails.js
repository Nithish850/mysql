import { DataTypes } from "sequelize";
import { sequelize } from "../dataBaseConnection/db.js";


const userdetails = sequelize.define('userdetails',{
    username:{
        type: DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    }
})

const usermodel = async ()=>{
    try{
        await userdetails.sync({alter:true})
        console.log("table added suceesfully")
    }
    catch(err){
        console.log("Error in table creation")
    }
}

export {usermodel , userdetails};