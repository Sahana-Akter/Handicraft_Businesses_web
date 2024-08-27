const Joi = require('joi');
const jwt = require('jsonwebtoken');

// Signup validation middleware
const signupValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(100).required(),
        profilePictureUrl: Joi.string().uri().required(), 
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "Bad request", error: error.details });
    }
    next();
};

// Login validation middleware
const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(100).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "Bad request", error: error.details });
    }
    next();
};

// JWT authentication middleware
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No token provided', success: false });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach the decoded user info to req
        next(); // Call next middleware or route handler
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token', success: false });
    }
};

module.exports = {
    signupValidation,
    loginValidation,
    authMiddleware // Export the new middleware
};
