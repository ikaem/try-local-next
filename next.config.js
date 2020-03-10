require("dotenv").config();
const withCSS = require("@zeit/next-css");
// const path = require("path");
// const Dotenv = require("dotenv-webpack");

// const next_config = {
//     webpack: config => {
//         config.plugins = config.plugins || [];

//         config.plugins = [
//             ...config.plugins,
//             new Dotenv({
//                 path: path.join(__dirname, ".env"),
//                 systemvars: true
//             })
//         ];
//         return config;
//     }
// }




module.exports = {
    withCSS, 
    // ...next_config,
    env: {
        "MONGODB_USER": process.env.MONGODB_USER,
        "MONGODB_PASS": process.env.MONGODB_PASS
    }

};