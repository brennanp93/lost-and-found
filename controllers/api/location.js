const Location = require("../../models/location");

module.exports = {
  index,
  filter,
};

async function index(req, res) {
  const allLocations = await Location.find({});
  res.json(allLocations);
}

async function filter(req, res) {
  let { state } = req.params;
  const stateData = await Location.find({ state });
  console.log(stateData, "req.params");
  res.json(stateData)
}
