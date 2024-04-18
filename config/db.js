const { Pool } = require("pg");
require("dotenv").config();
const pool = new Pool({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    ssl: {
        rejectUnauthorized: false, // Disables SSL certificate verification
    },
    sslmode: "require",
});
module.exports = pool;