require("dotenv").config();
require("./config/database");

const Location = require("./models/location");

(async function () {
  await Location.deleteMany({});
  const locationList = await Location.create([
    {
      name: "Pfeiffer Beach",
      city: "Big Sur",
      county: "Monterey",
      state: "California"
    },
    {
      name: "Coronado Beach",
      city: "Coronado",
      county: "San Diego",
      state: "California"
    },
    {
      name: "La Jolla Cove",
      city: "La Jolla",
      county: "San Diego",
      state: "California"
    },
    {
      name: "Santa Monica Beach",
      city: "Santa Monica",
      county: "Los Angeles",
      state: "California"
    },
    {
      name: "Pismo Beach",
      city: "Pismo Beach",
      county: "San Luis Obispo",
      state: "California"
    },
    {
      name: "Huntington Beach",
      city: "Huntington Beach",
      county: "Orange",
      state: "California"
    },
    {
      name: "Venice Beach",
      city: "Los Angeles",
      county: "Los Angeles",
      state: "California"
    },
    {
      name: "Zuma Beach",
      city: "Malibu",
      county: "Los Angeles",
      state: "California"
    },
    {
      name: "Laguna Beach",
      city: "Laguna Beach",
      county: "Orange",
      state: "California"
    },
    {
      name: "Carmel Beach",
      city: "Carmel-by-the-Sea",
      county: "Monterey",
      state: "California"
    },
    {
      name: "Malibu Lagoon State Beach",
      city: "Malibu",
      county: "Los Angeles",
      state: "California"
    },
    {
      name: "Newport Beach",
      city: "Newport Beach",
      county: "Orange",
      state: "California"
    },
    {
      name: "El Matador State Beach",
      city: "Malibu",
      county: "Los Angeles",
      state: "California"
    },
    {
      name: "Manhattan Beach",
      city: "Manhattan Beach",
      county: "Los Angeles",
      state: "California"
    },
    {
      name: "Salt Creek Beach",
      city: "Dana Point",
      county: "Orange",
      state: "California"
    },
    {
      name: "Leo Carrillo State Park",
      city: "Malibu",
      county: "Los Angeles",
      state: "California"
    },
    {
      name: "Refugio State Beach",
      city: "Goleta",
      county: "Santa Barbara",
      state: "California"
    },
    {
      name: "Pfeiffer State Beach",
      city: "Big Sur",
      county: "Monterey",
      state: "California"
    },
    {
      name: "Butterfly Beach",
      city: "Montecito",
      county: "Santa Barbara",
      state: "California"
    },
    {
      name: "Moonstone Beach",
      city: "Cambria",
      county: "San Luis Obispo",
      state: "California"
    }
  ]
  );
  console.log(locationList);
  process.exit();
})();
