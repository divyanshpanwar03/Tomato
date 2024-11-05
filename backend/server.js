import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";


// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)

app.get("/", (req, res) => {
    res.send("API Working");
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});

//mongodb+srv://divyansh10e:UfouMUQ7Cuuz6kT8@cluster0.sponr.mongodb.net/?