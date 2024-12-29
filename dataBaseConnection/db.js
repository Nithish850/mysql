import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_EMP, process.env.USER_NAME, process.env.PASS_WORD, {
    host: process.env.HOST,
    dialect: "mysql"
})

const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log("connenction sucess");
    }
    catch (err) {
        console.log(err)
        console.log("error")
    }
    return sequelize;
}

export { connectDb, sequelize };