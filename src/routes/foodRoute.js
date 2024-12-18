import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer"

const foodRouter = express.Router();

const storage =multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`-${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})

// Add food route without image upload middleware
foodRouter.post("/add",upload.single("image"), addFood);
 // No multer middleware here

foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
