require("dotenv").config();
require("./config/database");

const Location = require("./models/location");

(async function () {
  await Location.deleteMany({});
  const locationList = await Location.create([
    {
      name: "Siesta Beach",
      city: "Sarasota",
      county: "Sarasota",
      state: "Florida",
    },
    {
      name: "Ka'anapali Beach",
      city: "Lahaina",
      county: "Maui",
      state: "Hawaii",
    },
    {
      name: "Hapuna Beach State Park",
      city: "Kohala Coast",
      county: "Hawaii",
      state: "Hawaii",
    },
    {
      name: "St. Pete Beach",
      city: "St. Pete Beach",
      county: "Pinellas",
      state: "Florida",
    },
    {
      name: "Ocracoke Lifeguarded Beach",
      city: "Ocracoke",
      county: "Hyde",
      state: "North Carolina",
    },
    {
      name: "Grayton Beach State Park",
      city: "Santa Rosa Beach",
      county: "Walton",
      state: "Florida",
    },
    {
      name: "Coopers Beach",
      city: "Southampton",
      county: "Suffolk",
      state: "New York",
    },
    {
      name: "Caladesi Island State Park",
      city: "Dunedin",
      county: "Pinellas",
      state: "Florida",
    },
    {
      name: "Huntington Beach State Park",
      city: "Murrells Inlet",
      county: "Georgetown",
      state: "South Carolina",
    },
    {
      name: "Beachwalker Park",
      city: "Kiawah Island",
      county: "Charleston",
      state: "South Carolina",
    },
    {
      name: "Cape Hatteras National Seashore",
      city: "Hatteras",
      county: "Dare",
      state: "North Carolina",
    },
    {
      name: "Coronado Beach",
      city: "Coronado",
      county: "San Diego",
      state: "California",
    },
    {
      name: "Main Beach",
      city: "East Hampton",
      county: "Suffolk",
      state: "New York",
    },
    {
      name: "Hamoa Beach",
      city: "Hana",
      county: "Maui",
      state: "Hawaii",
    },
    {
      name: "Clearwater Beach",
      city: "Clearwater",
      county: "Pinellas",
      state: "Florida",
    },
    {
      name: "Coligny Beach Park",
      city: "Hilton Head Island",
      county: "Beaufort",
      state: "South Carolina",
    },
    {
      name: "Driftwood Beach",
      city: "Jekyll Island",
      county: "Glynn",
      state: "Georgia",
    },
    {
      name: "Hanalei Bay Beach",
      city: "Hanalei",
      county: "Kauai",
      state: "Hawaii",
    },
    {
      name: "Lighthouse Beach",
      city: "Buxton",
      county: "Dare",
      state: "North Carolina",
    },
    {
      name: "Manini'owali Beach (Kua Bay)",
      city: "Kailua-Kona",
      county: "Hawaii",
      state: "Hawaii",
    },
    {
      name: "Nags Head",
      city: "Nags Head",
      county: "Dare",
      state: "North Carolina",
    },
    {
      name: "Poipu Beach Park",
      city: "Koloa",
      county: "Kauai",
      state: "Hawaii",
    },
    {
      name: "Rendezvous Bay",
      city: "West End",
      county: "Anguilla",
      state: "British Overseas Territory",
    },
    {
      name: "Sandbridge Beach",
      city: "Virginia Beach",
      county: "Virginia Beach",
      state: "Virginia",
    },
    {
      name: "Race Point Beach",
      city: "Provincetown",
      county: "Barnstable",
      state: "Massachusetts",
    },
    {
      name: "South Beach",
      city: "Miami Beach",
      county: "Miami-Dade",
      state: "Florida",
    },
    {
      name: "Wai'anapanapa State Park",
      city: "Hana",
      county: "Maui",
      state: "Hawaii",
    },
    {
      name: "East Beach",
      city: "Santa Barbara",
      county: "Santa Barbara",
      state: "California",
    },
    {
      name: "Fort Lauderdale Beach",
      city: "Fort Lauderdale",
      county: "Broward",
      state: "Florida",
    },
    {
      name: "Hanauma Bay Nature Preserve",
      city: "Honolulu",
      county: "Honolulu",
      state: "Hawaii",
    },
    {
      name: "Crescent Beach",
      city: "Block Island",
      county: "Washington",
      state: "Rhode Island",
    },
    {
      name: "La Jolla Cove",
      city: "San Diego",
      county: "San Diego",
      state: "California",
    },
    {
      name: "Lanikai Beach",
      city: "Kailua",
      county: "Honolulu",
      state: "Hawaii",
    },
    {
      name: "Pensacola Beach",
      city: "Pensacola Beach",
      county: "Escambia",
      state: "Florida",
    },
    {
      name: "Pismo Beach",
      city: "Pismo Beach",
      county: "San Luis Obispo",
      state: "California",
    },
    {
      name: "Stinson Beach",
      city: "Stinson Beach",
      county: "Marin",
      state: "California",
    },
    {
      name: "Tunnels Beach",
      city: "Hanalei",
      county: "Kauai",
      state: "Hawaii",
    },
    {
      name: "Bowman's Beach",
      city: "Sanibel",
      county: "Lee",
      state: "Florida",
    },
    {
      name: "Coast Guard Beach",
      city: "Eastham",
      county: "Barnstable",
      state: "Massachusetts",
    },
    {
      name: "Delnor-Wiggins Pass State Park",
      city: "Naples",
      county: "Collier",
      state: "Florida",
    },
    {
      name: "Sand Beach",
      city: "Bar Harbor",
      county: "Hancock",
      state: "Maine",
    },
    {
      name: "Second Beach",
      city: "Middletown",
      county: "Newport",
      state: "Rhode Island",
    },
    {
      name: "Sombrero Beach",
      city: "Marathon",
      county: "Monroe",
      state: "Florida",
    },
    {
      name: "Assateague Beach",
      city: "Assateague Island",
      county: "Worcester",
      state: "Maryland",
    },
    {
      name: "Crane Beach",
      city: "Ipswich",
      county: "Essex",
      state: "Massachusetts",
    },
    {
      name: "Folly Beach County Park",
      city: "Folly Beach",
      county: "Charleston",
      state: "South Carolina",
    },
    {
      name: "Juno Beach Park",
      city: "Juno Beach",
      county: "Palm Beach",
      state: "Florida",
    },
    {
      name: "Kapalua Bay Beach",
      city: "Lahaina",
      county: "Maui",
      state: "Hawaii",
    },
    {
      name: "Malaquite Beach",
      city: "Corpus Christi",
      county: "Nueces",
      state: "Texas",
    },
    {
      name: "Montauk Beach",
      city: "Montauk",
      county: "Suffolk",
      state: "New York",
    },
    {
      name: "Orient Beach State Park",
      city: "Orient",
      county: "Suffolk",
      state: "New York",
    },
    {
      name: "Pfeiffer Beach",
      city: "Big Sur",
      county: "Monterey",
      state: "California",
    },
  ]);
  console.log(locationList);
  process.exit();
})();
