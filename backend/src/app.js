import express from "express";
import borrowRoutes from "./routes/borrow.routes.js";
import termsRoutes from "./routes/terms.routes.js";
import frequentlyRoutes from "./routes/frequently.routes.js";
import cors from "cors";
const app = express();

// ✅ Enable CORS for your frontend
app.use(cors({
  origin: "http://localhost:3000", // allow Next.js frontend
  methods: ["GET", "POST", "PUT", "DELETE"], // allowed HTTP methods
  credentials: true // optional if you use cookies/auth
}));


app.use(express.json());

app.use('/api/borrow' , borrowRoutes);
app.use('/api/terms' , termsRoutes);

//Frequently Asked Question Routes
app.use('/api/frequently' , frequentlyRoutes);

// ✅ ENABLE CORS HERE

export default app;