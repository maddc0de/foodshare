const User = require("../models/user");
// const { validatePassword, validateEmail } = require("../helpers/validation");


// const multer = require("multer");

// // Create multer upload instance
// const upload = multer({ storage: storage });

const UsersController = {
  Create: async (req, res) => {  //defines a method called "Create" that is an asynchronous function and takes two parameters: "req" and "res", which represent the request and response objects.
    const {email} = req.body; // extracts the email property from the request body //chnage to username.
    const existingUser = await User.findOne({ email }); //queries the database to see if a user with the provided email already exists.
                                                        // It uses the User model to find a document in the database that matches the provided email.
    
    if (existingUser) {
      return res.status(409).json({ message: 'Email address already in use' });
    }  //condition checks if the user with the provided email already exists. If it does, it returns a response with a 409 status code and a message indicating that the email address is already in use.
    
    const user = new User(req.body); // creates a new instance of the user model and with the request body as data
    user.save((err) => {             // saves the user
      if (err) {
        console.log(err)
        return res.status(400).json({ message: 'Bad ' });  // if there was an error whilst saving, it will return a 400 status with the message 'Bad request'
      } else {
        return res.status(201).json({ message: 'OK' }); // else if the save is successfull, it will return a 201 status and an 'OK' message
      }
    });
  },

  GetUserName: (req, res) => {
    const userId = (req.params.id);
    const user = User.findOne({_id: userId}, async (err, user) => {
      if (err) {
        throw err;
      }
      res.status(200).json( user.name );
    });
  },


  GetUserInfo: async (req, res) => {
    const userId = (req.params.id);
    const user = User.findOne({_id: userId}, async (err, user) => {
      if (err) {
        throw err;
      }
      res.status(200).json(user)
    });
  },
};

module.exports = UsersController;

