const User = require("../Models/UsersSchema");

const multer = require("multer");
const jwt = require("jsonwebtoken");
const secret = "User";

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).array("userPicture");

// Function to add a new user
const UserRegister = async (req, res) => {
  console.log(req.body)
  try {
    const {
      username,
      userContact,
      userAddress,
      userCode,
      userPassword,
      userMail,
      userDate,
      userNumber,
      userPicture,
    } = req.body;

    // Check for existing user by email
    let existingUserEmail = await User.findOne({ userMail });
    if (existingUserEmail) {
      return res.status(409).json({
        msg: "Email Already Registered With Us !!",
        data: null,
      });
    }

    // Check for existing user by contact
    let existingUserContact = await User.findOne({ userContact });
    if (existingUserContact) {
      return res.status(409).json({
        msg: "Contact Already Exists !!",
        data: null,
      });
    }

    // Creating a new User instance
    const newUser = new User({
      username,
      userContact,
      userAddress,
      userCode,
      userPassword,
      userMail,
      userDate,
      userNumber,
      userPicture:req.files[0]
    });

    // Save the new user to the database
    await newUser
      .save()
      .then((data) => {
        res.status(200).json({
          msg: "Inserted successfully",
          data: data,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          msg: "Data not Inserted",
          data: err,
        });
      });
  } catch (error) {
    console.log("err", error);
    res.status(500).json({ message: error.message });
  }
};

const viewUsers = (req, res) => {
  User.find()
    .exec()
    .then((data) => {
      if (data.length > 0) {
        res.status(200).json({
          msg: "Data obtained successfully",
          data: data,
        });
      } else {
        res.status(200).json({
          msg: "No Data obtained",
          data: [],
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        msg: "Data not obtained",
        Error: err,
      });
    });
};

const viewUserById = (req, res) => {
  User.findById(req.params.userid)
    .exec()
    .then((data) => {
      res.status(200).json({
        msg: "Data obtained successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: "No Data obtained",
        Error: err,
      });
    });
};

const editUserById = async (req, res) => {
  console.log(req.files);
  const {
    name,
    email,
    contact,
    password,
    dob,
    qualification,
    destination,
    address,
    dateofjoining,
  } = req.body;

  const updateData = {
    name,
    email,
    contact,
    password,
    dob,
    qualification,
    destination,
    address,
    // idproof: req.files[0], // assuming first file is ID proof
    dateofjoining,
    // profile: req.files[1],
  };

  if (req.files && req.files.length > 0) {
    for (var i in req.files) {
      if (req.files[i].mimetype.indexOf("video") > 0) {
        updateData.idproof = req.files[i];
      } else {
        updateData.profile = req.files[i];
      }
    }
  }

  try {
    const data = await User.findByIdAndUpdate(
      req.params.userid,
      updateData,
      {
        new: true,
      }
    );
    res.json({
      status: 200,
      msg: "Updated successfully",
      data: data,
    });
  } catch (err) {
    console.error(err);
    res.json({
      status: 502,
      msg: "Data not updated",
      Error: err,
    });
  }
};

//  login

const createToken = (user) => {
  return jwt.sign({ userId: user.id }, secret, { expiresIn: "1hr" });
};

const LoginUser = (req, res) => {
  console.log(req.body);
  const { userMail, userPassword } = req.body;
  
  User.findOne({ userMail })
    .exec()
    .then((user) => {
      if (!user) {
        return res.json({ status: 409, msg: "user not found" });
      } else if (user.userPassword !== userPassword) {
        return res.json({ status: 409, msg: "Password Missmatch !!" });
      }

      const token = createToken(user);

      res.json({
        data: user,
        status: 200,
        token: token,
        msg:"User login successfully"
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ msg: "Something went wrong" });
    });
};
// Validate Token
const requireAuth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  jwt.verify(token, secret, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ msg: "Unauthorized", err: err });
    }

    req.user = decodedToken.userId;
    next();
  });
};

// Forgot Password for entrepreneur
const forgotPassword = (req, res) => {
  Mentor.mentors
    .findOneAndUpdate(
      { email: req.body.email },
      {
        password: req.body.password,
      }
    )
    .exec()
    .then((data) => {
      if (data != null)
        res.status(200).json({
          msg: "Updated successfully",
        });
      else
        res.status(500).json({
          msg: "User Not Found",
        });
    })
    .catch((err) => {
      res.status(500).json({
        msg: "Data not Updated",
        Error: err,
      });
    });
};

const activateUserById = (req, res) => {
  User.findByIdAndUpdate({ _id: req.params.id }, { ActiveStatus: true })
    .exec()
    .then((data) => {
      res.status(200).json({
        msg: "Activated successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: "No Data obtained",
        Error: err,
      });
    });
};

// approve investorReq by  Admin
const deActivateUserById = (req, res) => {
  User.findByIdAndUpdate({ _id: req.params.id }, { ActiveStatus: false })
    .exec()
    .then((data) => {
      res.status(200).json({
        msg: "DeActivated successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: "No Data obtained",
        Error: err,
      });
    });
};

module.exports = {
  upload,
  UserRegister,
  viewUsers,
  viewUserById,
  editUserById,
  activateUserById,
  deActivateUserById,
  LoginUser
};
