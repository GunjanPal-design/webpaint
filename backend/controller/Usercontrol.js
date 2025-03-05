const UserModel = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

// Signup
const Sign = (req, res) => {
    const { name, email, password } = req.body;

    bcrypt.hash(password, 10)
        .then((hashedPassword) => {
            return UserModel.create({ name, email, password: hashedPassword })
        })
        .then(() => res.json({ message: "User created successfully" }))  // Send success response
        .catch((err) => res.status(500).json({ message: "Error creating user", error: err }));  // Handle errors
};

// Login
const Login = (req, res) => {
    const { email, password } = req.body;

    UserModel.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.json("no record");
            }

            bcrypt.compare(password, user.password)
                .then((isMatch) => {
                    if (!isMatch) {
                        return res.json({ message: "Invalid email or passwordssssss" });
                    }

                    const token = jwt.sign({ id: user._id, email: user.email }, 'your-secret-key', {
                        expiresIn: '24h',
                    });

                    return res.send({
                        message: "Login Successfully",
                        token,
                        user: {
                            id: user._id,
                            email: user.email,
                            name: user.name
                        }
                    });
                })
                .catch((err) => {
                    return res.status(500).json({ message: "Error in password comparison", error: err });
                });
        })
        .catch((err) => {
            return res.status(500).json({ message: "Error during user lookup", error: err });
        });
};

module.exports = { Sign, Login };
