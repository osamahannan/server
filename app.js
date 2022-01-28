const dotenv = require('dotenv');
const cookieparser = require("cookie-parser");
const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors({ origin: "*" }));
app.options("*", cors());

// middelwares
dotenv.config({ path: './config.env' });
require('./db/conn');
app.use(express.json());
app.use(cookieparser());
// const User = require('./model/userSchema');
const PORT = process.env.PORT;
app.use(require('./router/auth'));

// app.get('/', (req, res) => {
//     res.send("This is Home Page");
// })

// app.get('/contact', (req, res)=> {
//     res.send("This Contact Page");
// })

// app.get('/signin', (req, res)=> {
//     res.send("This is Login Page");
// })

// app.get('/submit', (req, res) => {
//     res.send("This is SignUp page");
// })

// if (process.env.NODE_ENV == "production") {
//     app.use(express.static("client/build"));
// }

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})