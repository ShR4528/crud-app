import mongoose from "mongoose";
mongoose.set('strictQuery', true);


const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-mebcke6-shard-00-00.6juacvo.mongodb.net:27017,ac-mebcke6-shard-00-01.6juacvo.mongodb.net:27017,ac-mebcke6-shard-00-02.6juacvo.mongodb.net:27017/?ssl=true&replicaSet=atlas-sgwd07-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("DB connect")
    } catch (error) {
        console.log("Error while connecting with database", error.message)
    }
}
export default Connection;