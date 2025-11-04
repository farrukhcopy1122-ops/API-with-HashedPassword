const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const JWT = require('jsonwebtoken');

// Schema
const User = require('../model/userModel');


// Create a new user
router.post('/register', async (req, res) => {
    
    try {
        
        const { name , email, password } = req.body;

        // Check first before creating
        const existingEmail = await User.findOne({ email });
        
        if (existingEmail) {
        
            return res.json({ error: 'Email already exist...' });
            
        }
        
        // Password hashing
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Creating new user
        await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.json({ Message: 'Account created...' })


    } catch (error) {
        res.json({ error: `Something wnet wrong...` })
    }
})



// Login
router.post('/login', async (req, res) => { 
    try {
        
        const { email, password } = req.body;

        // Check if email exist
        const user = await User.findOne({ email });
        if(!user) {
            return res.json({ error: 'Invalid email or password.' });
        }

        // Password Comparison
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.json({ error: 'Passwords do not match.' })
        }
        
        else {
            res.status(401).json({ error: 'Invalid credential...' });
        }


    } catch (error) {
        res.json(`Server error ${error}...`)
    }
})



module.exports = router;
