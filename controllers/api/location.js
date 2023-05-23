const Location = require("../../models/location");

module.exports = {
  index,
  filter,
};

async function index(req, res) {
  const allLocations = await Location.find({});
  console.log(allLocations, "index ctrl");
  res.json(allLocations);
}

async function filter(req, res) {
  const { state, county, city } = req.params;

  // Build the filter object
  const filter = { state };
  console.log(state, county, city, "S C C");
  // Exclude undefined parameters from the filter
  if (county !== "undefined") {
    filter.county = county;
  }

  if (city !== "undefined") {
    filter.city = city;
  }

  try {
    const locations = await Location.find(filter);
    console.log(locations);
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: "an error occured" });
  }
}
// async function filter(req, res) {
//   const state = req.params.state;
//   const county = req.params.county;
//   const city = req.params.city;

//   let filter = {state}

// console.log(!!state)

//   if (state && !!county) {
//     locationData = await Location.find({ state });
//   } else if (state && county) {
//     locationData = await Location.find(filter);
//   }
//   res.json(locationData);
// }
