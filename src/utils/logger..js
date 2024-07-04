import pino from "pino";

const logger = pino({
    transport : {
        target: "pino-pretty",
        option: {
            colorize: true,
            translateTime : `SYS: dd-mm-yyyy HH:MM:SS`,
            ignore: "pid,hostname"
        }
    }

    //logger.info("This is logger testing");

});


export default logger;