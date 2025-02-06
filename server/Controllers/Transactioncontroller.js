const NormalTransactionSchema = require("../Models/NormalTransactionschema");
const User = require("../Models/UsersSchema"); // Import User model

const createNormalTransaction = async (req, res) => {
  console.log(req.body);
  try {
    const { payeename, payamount, ifsccode, accountnumber, transactiontype, userid } = req.body;

    // Find the user
    const user = await User.findById(userid);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Check if user has enough balance
    if (user.userBalance < payamount) {
      return res.status(400).json({ message: "Insufficient balance." });
    }

    // Deduct amount from user balance
    user.userBalance -= payamount;
    await user.save(); // Save updated balance

    // Create transaction
    const transaction = new NormalTransactionSchema({
      payeename,
      payamount,
      ifsccode,
      accountnumber,
      transactiontype,
      userid,
    });

    await transaction.save();

    res.status(201).json({ message: "Transaction done successfully." });
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

const viewAlllNormaTransactions = async (req, res) => {
  try {
    const transactions = await NormalTransactionSchema.find().populate("userid");
    if (transactions.length === 0) {
      return res.status(404).json({ message: "No transactions found." });
    }
    res.status(200).json({ message: "Data fetched", data: transactions });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch transactions", error });
  }
};

module.exports = { createNormalTransaction,viewAlllNormaTransactions };
