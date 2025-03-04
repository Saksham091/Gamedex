const router = require("express").Router();
const user = require("../Modules/userModal")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

router.post("/signup", async (req, res) => {
    const { firstName, lastName, userName, password, email} = req.body;

    // Velidating If The Email Already Exist

    try {
        const foundUser = await user.findOne({ $or: [{ userName: userName }, { email: email }] });

        if (foundUser) {
            return res.status(400).json({
                "error": [
                    {
                        "msg": "User Already Exists",
                    }
                ]
            });
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = await user.create({
                firstName,
                lastName,
                userName,
                email,
                password: hashedPassword
            });

            const token = await jwt.sign(
                { userId: newUser._id },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
            );
            res.status(200).json({ token: `${token}` });
        }
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json
    }
});

// For Login

router.post('/login', async (req, res) => {
    const { userName, password } = req.body;
    try {
        const oldUser = await user.findOne({ userName: userName });

        if (!oldUser) {
            return res.status(400).json({
                "error": [
                    {
                        "msg": "User Not Found",
                    }
                ]
            });
        } else {
            let valid = await bcrypt.compare(password, oldUser.password);

            if (!valid) {
                return res.status(400).json({
                    "error": [
                        {
                            "msg": "Wrong Password",
                        }
                    ]
                });
            } else {
                const token = await jwt.sign(
                    { userId: oldUser._id },
                    process.env.JWT_SECRET,
                    { expiresIn: "1h" }
                );
                res.status(200).json({ token: `${token}` });
            }
        }
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json({
            "error": [
                {
                    "msg": "Internal server error.",
                }
            ]
        });
    }
});

router.get("/all", async (req, res) => {
    try {
        const data = await user.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
    }
})

module.exports = router