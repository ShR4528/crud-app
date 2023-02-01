import mongoose from "mongoose"
mongoose.set('strictQuery', true);


const Connection = async () => {
    const URL = `mongodb+srv://shamil17:shamil17@crud.6juacvo.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, {

            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("DB connect")
    } catch (error) {
        console.log("Error while connecting with database", error)
    }
}
export default Connection;