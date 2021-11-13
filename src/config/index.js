const dotenv = require('dotenv');

dotenv.config();

module.exports.api = {
    port: process.env.PORT,
    prefix: process.env.PREFIX,
    databaseURL: process.env.DATABASE_URI
}
