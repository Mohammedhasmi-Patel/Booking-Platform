
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        console.log(process.env.MONGODB_URI)
        await mongoose.connect(process.env.MONGODB_URI as string);
        
        console.log("Database connect successfully...")
    } catch (error) {
        console.log(`There is an error while connect db ${error}`)
    }
}