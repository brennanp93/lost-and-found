import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import * as locationAPI from "../../utilities/location-api";
import * as itemAPI from "../../utilities/item-api";
import NavBar from "../../components/NavBar/NavBar";
import NewItemForm from "../../components/NewItemForm/NewItemForm";
import LostItems from "../../components/LostItems/LostItems";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [locations, setLocations] = useState([]);
  const [filterLocations, setFilterLocations] = useState([]);
  const [lostItems, setLostItems] = useState([]);
  const [specificBeachItems, setSpecificBeachItems] = useState([]);

  async function addLostItem(itemData) {
    const newLostItemData = await itemAPI.create(itemData);
    setLostItems(newLostItemData);
  }

  // async function filterDataFunction(state, county, city) {
  //   console.log(state, county, "app.jsx filter obj")
  //   const returnedData = await locationAPI.filter(state, county, city);
  //   // console.log(returnedData, "returnedData");
  //   setLocations(returnedData);
  // }

  async function getItemsByBeach(beachObj, id) {
    // console.log(id, "app.jsx page");
    const itemsByBeach = await itemAPI.singleBeach(beachObj, id);
    setSpecificBeachItems(itemsByBeach);
  }
  useEffect(function () {
    async function getAllLocations() {
      const allLocations = await locationAPI.getAll();
      const allLostItems = await itemAPI.getAll();
      setLocations(allLocations);
      setLostItems(allLostItems);
    }
    getAllLocations();
  }, []);
  console.log(lostItems)

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />

          <Routes>
            {/* Route components in here */}
            <Route
              path="/items/new"
              element={
                <NewItemForm
                  locations={locations}
                  user={user}
                  addLostItem={addLostItem}
                  lostItems={lostItems}
                />
              }
            />
            <Route
              path="/lostitems"
              element={
                <LostItems
                  locations={locations}
                  user={user}
                  addLostItem={addLostItem}
                  lostItems={lostItems}
                  getItemsByBeach={getItemsByBeach}
                  specificBeachItems={specificBeachItems}
                  // filterDataFunction={filterDataFunction}
                  // filterLocations={filterLocations}
                />
              }
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
