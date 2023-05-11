const Location = require("../../models/location");

module.exports = {
  index,
};

async function index(req, res) {
  const allLocations = await Location.find({});
  res.json(allLocations);
}
