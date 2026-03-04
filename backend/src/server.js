// import 'dotenv/config'
// import app from "./app.js";
// import connectDB from "./config/db.js";

// connectDB();

// const PORT = process.env.PORT || 5000;

// app.listen(PORT , () => {
//    console.log("Server is running on port 5000");
// });


import 'dotenv/config';
import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();   // ✅ wait for DB

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Server startup error:", error);
    process.exit(1);  // stop if DB fails
  }
};

startServer();