import mongoose from "mongoose";
mongoose.set('strictQuery', true);


const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@crud.6juacvo.mongodb.net/?retryWrites=true&w=majority`
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