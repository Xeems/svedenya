// import winston from "winston"
// import "winston-syslog"
// import { Syslog } from "winston-syslog"
// let logger: winston.Logger

// if(typeof window === "undefined"){
//     logger = winston.createLogger({
//         levels: winston.config.syslog.levels,
//         format: winston.format.combine(
//             winston.format.timestamp(),
//             winston.format.json()
//         ),
//         transports:[
//             new winston.transports.Console({
//                 level: "debug",
//                 format: winston.format.combine(winston.format.colorize(), winston.format.simple())
//             }),
//             new Syslog({
//                 app_name: 'next-sveden',
//                 facility: 'local0',
//                 protocol: 'unix',
//                 path: '/dev/log'
//             })
//         ]
//     })
// } else { logger = winston.createLogger({
//     silent: true
//   });
// }

// export default logger;