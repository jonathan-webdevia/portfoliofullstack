const { ObjectID } = require("bson");
const client = require("../db/connect");
const { Experience } = require("../models/Experience");

const addExperience = async (req, res) => {
  try {
    let experience = new Experience(
      req.body.title,
      req.body.company,
      req.body.strPeriod,
      req.body.endPeriod,
      req.body.tags
    );
    let result = await client
      .db()
      .collection("experiences")
      .insertOne(experience);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

module.exports = {
  addExperience,
};
