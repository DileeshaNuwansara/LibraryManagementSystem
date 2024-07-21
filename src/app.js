import "dotenv/config";
import express from "express";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import logger from "./utils/logger";
import config from "./configs";
import {connect} from "./utils/database.connection";
import { googleAuth } from "./configs/google.auth";
import {routesInit} from "./api/routes"

const app = express();
const PORT = process.env.PORT || "8090";

app.use (cors());
app.use(express.json({ limit : "20mb" }));

app.use(
    session({
        secret:config.SESSION_SECRET,
        resave: false,
        saveUninitialized:false,
        cookie:{
            secure:false,
            expires:new Date(Date.now + 10000),
            maxAge:10000,
        },


    })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res, next) => {
    res.send("<a href='http://localhost:8090/auth/google'> Login with Google </a>");
    next();
});

app.listen(PORT , ()=>{
    //console.log(`Server is up and running : ${PORT}`);
    logger.info(`Server is up and running : ${PORT} `);
    //logger.warn("this is warning");
    //logger.error("this is error");
    connect();
    // Initialize routes after setting up passport and Google authentication
    routesInit(app, passport);
    googleAuth(passport); // Initialize Google authentication
});


