import mongoose from 'mongoose';

async function connectDB() {
    try {
        const res = await mongoose.connect(process.env.MONGO_URI);
        console.log("database donnected");
    } catch (error) {
        console.log("something fishy happened");
        
    }

}

export default connectDB;