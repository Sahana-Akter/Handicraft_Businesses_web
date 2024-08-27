const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/User");

// Signup function
const signup = async (req, res) => {
    try {
        const { name, email, password, profilePictureUrl } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User already exists, you can login', success: false });
        }

        const userModel = new UserModel({
            name,
            email,
            password: await bcrypt.hash(password, 10),
            profilePictureUrl
        });

        await userModel.save();

        res.status(201).json({
            message: "Signup successful",
            success: true
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

// Login function
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMsg = 'Auth failed: email or password is wrong';
        if (!user) {
            return res.status(403).json({ message: errorMsg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: errorMsg, success: false });
        }
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: "Login Success",
            success: true,
            jwtToken,
            email,
            name: user.name
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

// Google login function
const googleLogin = async (req, res) => {
    const { uid, email, displayName, profilePictureUrl } = req.body;
    try {
        let user = await UserModel.findOne({ email });

        if (!user) {
            // Create a new user if one doesn't exist
            user = new UserModel({
                uid,
                email,
                name: displayName,
                profilePictureUrl,
                password: await bcrypt.hash(uid, 10), // Using UID as password placeholder
            });
            await user.save();
        }

        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: "Google Login Success",
            success: true,
            jwtToken,
            email,
            name: user.name
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to login with Google",
            success: false,
            error: error.message
        });
    }
};



module.exports = {
    signup,
    login,
    googleLogin
};
