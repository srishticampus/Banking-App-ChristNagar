const waterbillschema = require("../Models/WaterbillSchema");
const Electricbill = require("../Models/ElectricbillSchema");
const User = require("../Models/UsersSchema");

const validateUserAndBalance = async (userid, amount) => {
  const user = await User.findById(userid);
  if (!user) {
    throw new Error("User not found.");
  }
  if (user.userBalance < amount) {
    throw new Error("Insufficient balance for bill payment.");
  }
  return user;
};

const checkExistingElectricBillPayment = async ({ userid, month, year }) => {
  const existingPayment = await Electricbill.findOne({
    userid,
    month,
    year,
  }).exec();
  return !!existingPayment; // Returns true if a payment exists, otherwise false
};

const payElectricBill = async (req, res) => {
  try {
    const { userid, billnumber, accountnumber, amount, month, year } = req.body;

    // Validate input fields
    if (!userid || !billnumber || !accountnumber || !amount || !month || !year) {
      return res.status(400).json({ msg: "All fields are required." });
    }
    if (amount <= 0) {
      return res.status(400).json({ msg: "Invalid amount." });
    }

    // Check if the user has already paid for this month
    const hasExistingPayment = await checkExistingElectricBillPayment({
      userid,
      month,
      year,
    });

    if (hasExistingPayment) {
      return res.status(400).json({
        msg: "You have already made a payment for this month.",
      });
    }

    // Validate user and check balance
    const user = await User.findById(userid);
    if (!user) {
      return res.status(404).json({ msg: "User not found." });
    }
    if (user.userBalance < amount) {
      return res.status(400).json({ msg: "Insufficient balance." });
    }

    // Deduct balance and update user
    user.userBalance -= amount;
    await user.save();

    // Create and save new electric bill record
    const newBill = new Electricbill({
      userid,
      billnumber,
      accountnumber,
      amount,
      month,
      year,
      date: new Date(), // Save the current date
    });

    const savedBill = await newBill.save();

    res.status(200).json({
      msg: "Electric bill payment successful.",
      data: {
        bill: savedBill,
        remainingBalance: user.userBalance,
      },
    });
  } catch (error) {
    console.error("Error processing electric bill payment:", error);
    res.status(500).json({ msg: error.message });
  }
};

const payWaterBill = async (req, res) => {
  console.log(req.body, "p");

  try {
    const { userid, billnumber, accountnumber, amount, month, year } = req.body;

    // Validate input
    if (!userid || !billnumber || !accountnumber || !amount || !month || !year) {
      return res.status(400).json({ msg: "All fields are required." });
    }
    if (amount <= 0) {
      return res.status(400).json({ msg: "Invalid amount." });
    }

    const user = await validateUserAndBalance(userid, amount);

    // Check if the user has already made a payment for the same month and year
    const existingPayment = await waterbillschema.findOne({
      userid, 
      year,
      month,
    }).exec();

    if (existingPayment) {
      return res.status(400).json({
        msg: "You have already made a payment for this month.",
      });
    }

    // Deduct balance and save user
    user.userBalance -= amount;
    await user.save();

    // Create new water bill record
    const newBill = new waterbillschema({
      userid,
      billnumber,
      accountnumber,
      amount,
      month,
      year,
      date: new Date(),
    });

    const savedBill = await newBill.save();

    res.status(200).json({
      msg: "Water bill payment successful.",
      data: {
        bill: savedBill,
        remainingBalance: user.userBalance,
      },
    });
  } catch (error) {
    console.error("Error processing water bill payment:", error);
    res.status(500).json({ msg: error.message });
  }
};


module.exports = { payElectricBill, payWaterBill };
