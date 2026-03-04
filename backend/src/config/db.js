// import mongoose from "mongoose";

// const connectDB = async () =>
// {
//     try
//     {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log("MongoDB connected");
//     }
//     catch(error)
//     {
//        console.log("MongoDB connection failed: ", error);
//     }
// }

// export default connectDB;



import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not defined in environment variables");
        }

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);

        // 🚨 VERY IMPORTANT
        throw error;   // this stops server if DB fails
    }
};

export default connectDB;