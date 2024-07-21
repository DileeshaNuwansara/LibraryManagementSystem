const routesInit = (app, passport) =>{
    app.get("/auth/google", passport.authenticate("google",{scope: ["profile", "email"] }));

    //call back endpoint, check the user is validate from google strategy.
    // Callback endpoint, checks if the user is validated from Google strategy
    app.get("/auth/google/callback",
        passport.authenticate("google", {
            failureRedirect: "/login",
        }),
        (req,res)=>{
            console.log("User authenticated");
        }
    );
};

export {routesInit};