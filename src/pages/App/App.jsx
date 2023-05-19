import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import * as locationAPI from "../../utilities/location-api";
import * as itemAPI from "../../utilities/item-api";
import NavBar from "../../components/NavBar/NavBar";
import NewItemForm from "../../components/NewItemForm/NewItemForm";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [locations, setLocations] = useState([]);
  const [lostItems, setLostItems] = useState([]);

  async function addLostItem(itemData) {
    const newLostItemData = await itemAPI.create(itemData);
    setLostItems(newLostItemData);
  }

  useEffect(function () {
    async function getAllLocations() {
      const allLocations = await locationAPI.getAll();
      const allLostItems = await itemAPI.getAll()
      setLocations(allLocations);
      setLostItems(allLostItems)
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
                />
              }
            />
            {/* <Route path="/orders" /> */}
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
