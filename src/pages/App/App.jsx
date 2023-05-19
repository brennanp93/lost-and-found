import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import * as locationAPI from "../../utilities/location-api";
import NavBar from "../../components/NavBar/NavBar";
import NewItemForm from "../../components/NewItemForm/NewItemForm";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [locations, setLocations] = useState([]);

  useEffect(function () {
    async function getAllLocations() {
      const allLocations = await locationAPI.getAll();
      setLocations(allLocations);
    }
    getAllLocations();
  }, []);
  // console.log(locations[0]?.name)
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          {/* <div className="container">
            {locations.map((location) => (
              <div className="beach-panel">
                <h3>{location.name}</h3>
              </div>
            ))}
          </div> */}

          <Routes>
            {/* Route components in here */}
            <Route path="/items/new" element={<NewItemForm locations={locations} user={user}/>} />
            {/* <Route path="/orders" /> */}
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
