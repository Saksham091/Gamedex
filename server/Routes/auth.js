const router = require("express").Router();
const user = require("../Modules/userModal")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

router.post("/signup", async (req, res) => {
    const { firstName, lastName, username, password, email} = req.body;

    // Velidating If The Email Already Exist

    try {
        const foundUser = await user.findOne({ $or: [{ userName: username }, { email: email }] });

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

            user.create({
                firstName,
                lastName,
                username,
                email,
                password: hashedPassword
            });

            const token = await jwt.sign({
                email
            }, process.env.Key , {
                expiresIn: 3600000
            })

            res.send(`Welcome New User ~ ${token}`);
        }
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json
    }
});

// For Login

router.post('/login', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const oldUser = await user.findOne({ $or: [{ userName: username }, { email: email }] });

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
                const token = await jwt.sign({
                    email
                }, process.env.Key, {
                    expiresIn: 3600000
                })

                res.status(200).json({token:`${token}`});
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

router.get("/", async (req, res) => {
    try {
        const data = await user.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
    }
})

module.exports = router