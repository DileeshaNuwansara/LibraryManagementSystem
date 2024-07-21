import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import config from ".";
import logger from "../utils/logger";

const googleAuth = (passport) => {
    passport.use(
        new GoogleStrategy(
            {
                clientID: config.GOOGLE_CLIENT_ID,
                clientSecret: config.GOOGLE_CLIENT_SECRET,
                callbackURL: config.GOOGLE_REDIRECT_URL,
            },
            (accessToken, refreshToken, profile, done) => {
                console.log(profile);
                return done(null, profile);
            }
        )
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        done(null, id);
    });
};

export { googleAuth };
