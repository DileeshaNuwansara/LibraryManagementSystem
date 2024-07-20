import express from "express";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import 'dotenv/config';
import logger from "./utils/logger.";
import config from "./configs";
import {connect} from "./utils/database.connection";
import { googleAuth } from "./configs/google.auth";

const app = express();
const PORT = process.env.PORT || "8090";

app.use (cors());
app.use(express.json({ limit : "20mb" }));

app.use(
    session({
        secret:config.SESSION_SECRET,


    })
)
app.use(passport.initialize());
app.use(passport.session);

app.get("/", (req, res, next) => {
    res.send("<h1> Library Management System </h1>");
    next();
});

app.listen(PORT , ()=>{
    //console.log(`Server is up and running : ${PORT}`);
    logger.info(`Server is up and running : ${PORT} `);
    //logger.warn("this is warning");
    //logger.error("this is error");
    connect();
    googleAuth(passport);


});


