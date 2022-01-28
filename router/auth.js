const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");
const cookieParser = require('cookie-parser');


require('../db/conn');
router.use(cookieParser());
const User = require('../model/userSchema');

// Submit
router.post('/submit', async (req, res) => {

    const { teamName, date, tossResult, matchResult, matchCost, opponentScore, opponentOver, annihilatorScore, annihilatorOver, playerName, category, runScored, ballPlayed, sixes, fours, overBowled, runGiven, wicketTaken } = req.body;

    if (!teamName || !date || !tossResult || !matchResult || !matchCost || !opponentScore || !opponentOver || !annihilatorScore || !annihilatorOver) {
        return res.status(422).json({ error: "please fill all the fields " })
    }

    else {

        const user = new User({ teamName, date, tossResult, matchResult, matchCost, opponentScore, opponentOver, annihilatorScore, annihilatorOver, playerName, category, runScored, ballPlayed, sixes, fours, overBowled, runGiven, wicketTaken })

        const vari = await user.save();
        console.log(vari);
        res.status(201).json({ data: vari })
    }

})

router.get('/get-allmatch', async (req, res) => {
    const user = await user.find()
    res.status(200).send({ data: user })
})



//signIn
// router.post('/signin', async (req, res) => {

//     try {
//         const { email, password } = req.body;

//         if (!email || !password) {
//             return res.status(422).json({ error: "please fill all the details" })
//         }

//         const userLogin = await User.findOne({ email: email });

//         if (userLogin) {

//             const isMatch = await bcrypt.compare(password, userLogin.password);
//             const token = await userLogin.generateAuthToken();
//             // console.log(token);
//             res.cookie("jwtoken", token, {
//                 expires: new Date(Date.now() + 25892000000),
//                 httpOnly: true
//             });

//             if (!isMatch) {

//                 res.status(400).json({ error: "Invalid Credentials pass" })

//             } else {
//                 res.json({ message: "user signIn successful" })
//             }
//         } else {
//             res.status(400).json({ error: "Ïnvalid Credentials" })
//         }

//     } catch (err) {
//         console.log(err);
//     }
// })

// // About Page
// router.get('/about', authenticate, async (req, res) => {
//     res.send(req.rootUser);
// })

// router.get('/getData', authenticate, async (req, res) => {
//     res.send(req.rootUser);
// })

// // Contact page
// router.post('/contact', authenticate, async (req, res) => {

//     try {

//         const { name, email, phone, message } = req.body;

//         if (!name || !email || !phone || !message) {
//             console.log("error in contact form");
//             return res.json({ error: "please fill the contact form" });
//         }

//         const userContact = await User.findOne({ _id: req.userID })

//         if (userContact) {

//             const userMessage = await userContact.addMessage(name, email, phone, message);
//             await userContact.save();

//             res.status(201).json({ message: "User Contact Successful" });
//         }

//     } catch (error) {
//         console.log(error);
//     }
// })

// // Logout Page
// router.get('/logout', (req, res) => {
//     res.clearCookie('jwtoken', { path: '/' });
//     res.status(200).send("User Logout Successful");
// })

module.exports = router;