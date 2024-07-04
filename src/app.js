import express from "express";
import cors from "cors";
//import dotenv from "dotenv";
import 'dotenv/config';
import logger from "./utils/logger.";

const app = express();
const PORT = process.env.PORT || "8090";

app.use (cors());
app.use(express.json({ limit : "20mb" }));

app.get("/", (req, res, next) => {
    res.send("<h1> Library Management System </h1>");
    next();
});

app.listen(PORT , ()=>{
    //console.log(`Server is up and running : ${PORT}`);
    logger.info(`Server is up and running : ${PORT} `);
    logger.warn("this is warning");
    logger.error("this is error");

});


