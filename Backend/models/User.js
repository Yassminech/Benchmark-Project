const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const passwordComplexity = require("joi-password-complexity");


// User schema
const userSchema = new mongoose.Schema({

    fullname: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique : true,
        minlength: 5,
        maxlength: 100,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
    },
    
      profilePhoto:{
        type : Object, //Object
        default : {
            url:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            publicId : null,
        },
    },
    // Property for account status (enabled or disabled)
    active: {
        type: Boolean,
        default: false // The account is disabled by default upon creation
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isAccountVerified: {
        type: Boolean,
        default: false,
    },
    verificationToken: String,
}, {
    timestamps: true,
});

//generate Auth token
userSchema.methods.generateAuthToken = function (){
    try {
    return jwt.sign({  
        id: this._id,
        isAdmin : this.isAdmin, 
        name: this.username, 
        email: this.email},
        process.env.JWT_SECRET, { expiresIn: '1h' });}
    catch (error) {
        res.status(404).json(error.message);
    }
}

// User model
const User = mongoose.model("User", userSchema);

// Validate Register User
function validateRegisterUser(obj) {
    const schema = Joi.object({
        username: Joi.string().trim().min(2).max(100).required(),
        email: Joi.string().trim().min(5).max(100).required().email(),
        password: Joi.string().trim().min(8).required(),
        roles: Joi.string().valid('user').default('user'),
    });
    return schema.validate(obj);
}

// Validate Login User
function validateLoginUser(obj) {
    const schema = Joi.object({
        email: Joi.string().trim().min(5).max(100).required().email(),
        password: Joi.string().trim().min(8).required(),
    });
    return schema.validate(obj);
}

// Password hash before saving to database
userSchema.pre('save', async function (next) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      next();
    } catch (error) {
      next(error);
    }
  });
  
  // Validate Update User
function validateUpdateUser(obj) {
    const schema = Joi.object({
        username: Joi.string().trim().min(2).max(100),
        password: passwordComplexity(),
    });
    return schema.validate(obj);
}




  module.exports = { 
    User, 
    userSchema,
    validateRegisterUser,
    validateLoginUser,
    validateUpdateUser,
};