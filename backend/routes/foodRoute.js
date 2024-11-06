import express from 'express';
import { addFood,listfood,removeFood } from '../controllers/foodController.js';
import multer from 'multer';

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => { // Ensure `file` and `cb` are defined in this order
        return cb(null,`${Date.now()}${file.originalname}`); // Use `file.originalname` to create a unique filename
    }
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list",listfood);
foodRouter.post("/remove",removeFood);

export default foodRouter;
