const User = require('../models/user.models');
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const jsonwebtoken = require('jsonwebtoken');
const Secretekey = process.env.SECRETE_KEY;

const register =  async (req, res) => {
    try {
      const { username, email, password } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser  = await User.create(req.body)

      await newUser.save();
      const webToken = jsonwebtoken.sign({username}, Secretekey, {expiresIn : '1 Day'})
      res.json({ 
        message: 'User registered successfully',
        webToken
    });
    } 
    catch (error) {
      res.json({ error: 'An error occurred' 
    });
    }
  }



const login = async (req, res)=> {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res.json({ error: 'Invalid credentials' });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.json({ error: 'Invalid credentials' });
      }
      const webToken = jsonwebtoken.sign({username:user.username}, Secretekey, {expiresIn : '1 Day'})
      res.json({ 
        message: 'Login successful',
        webToken 
      });
    } 
    catch (error) {
      res.json({ error: 'An error occurred' 
    });
    }
  }


const transporter = nodemailer.createTransport({
  service: 'riyazn886@gmail.com',
  auth: {
    user: 'riyazn886@gmail.com',
    pass: 'riyaz',
  },
});

const forgotPassword = async (req, res)=> {
    try {
      const { email } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.json({ 
            error: 'User not found' 
        });
      }

      const resetToken = 'Hello this is your reset password link';
      user.resetToken = resetToken;
      user.resetTokenExpiration = Date.now() + 3600000; 
      await user.save();

      
      const mailOptions = {
        from: 'riyazn886@gmail.com',
        to: email,
        subject: 'Password Reset',
        text: `Click on the following link to reset your password: http://localhost:3000/reset-password/${resetToken}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          res.json({ error: 'An error occurred while sending the email' });
        } else {
          res.json({ message: 'Password reset email sent' });
        }
      });
    } catch (error) {
      console.error('Error during forgot password:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  }

  






 module.exports = {
    register,
    login,
    forgotPassword,
 }
