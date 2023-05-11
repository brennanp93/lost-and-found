require("dotenv").config();
require("./config/database");

const Location = require("./models/location");

(async function () {
  await Location.deleteMany({});
  const locationList = await Location.create([
    {
      name: "Santa Monica State Beach",
      city: "Santa Monica",
      county: "Los Angeles",
      state: "California",
    },
    {
      name: "Venice Beach",
      city: "Venice",
      county: "Los Angeles",
      state: "California",
    },
    {
      name: "La Jolla Cove",
      city: "La Jolla",
      county: "San Diego",
      state: "California",
    },
    {
      name: "Coronado Beach",
      city: "Coronado",
      county: "San Diego",
      state: "California",
    },
    {
      name: "Cannon Beach",
      city: "Cannon Beach",
      county: "Clatsop",
      state: "Oregon",
    },
    {
      name: "Cape Kiwanda State Natural Area",
      city: "Pacific City",
      county: "Tillamook",
      state: "Oregon",
    },
    {
      name: "Ruby Beach",
      city: "Forks",
      county: "Jefferson",
      state: "Washington",
    },
    {
      name: "Alki Beach",
      city: "Seattle",
      county: "King",
      state: "Washington",
    },
    {
      name: "Cape Disappointment State Park",
      city: "Ilwaco",
      county: "Pacific",
      state: "Washington",
    },
    {
      name: "Rialto Beach",
      city: "Forks",
      county: "Clallam",
      state: "Washington",
    },
  ]);
  console.log(locationList);
  process.exit();
})();
