const { ObjectID } = require("bson");
const client = require("../db/connect");
const { User } = require("../models/user");

const addUser = async (req, res) => {
  try {
    let user = new User(
      req.body.name,
      req.body.adress,
      req.body.phone,
      req.body.role
    );
    let result = await client
      .db()
      .collection("users")
      .insertOne(user);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

module.exports = {
  addUser
};
