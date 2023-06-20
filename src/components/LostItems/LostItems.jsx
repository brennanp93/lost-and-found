import { useState, useEffect } from "react";

import FilterForm from "../FilterForm";
import { staticStates } from "../../data.js";
import { filter } from "../../utilities/location-api";
import { useParams, useNavigate } from "react-router-dom";

export default function LostItems({
  locations,
  getItemsByBeach,
  specificBeachItems,
  lostItems,
}) {
  const [beachObj, setBeachObj] = useState([{}]);
  const [state, setState] = useState({ state: "" });
  const [county, setCounty] = useState({ county: "" });
  const [city, setCity] = useState({ city: "" });
  const [items, setItems] = useState([specificBeachItems]);

  const navigate = useNavigate();
  // console.log(specificBeachItems);

  function handleSubmit(evt) {
    evt.preventDefault();
    getItemsByBeach(beachObj, beachObj._id);
    setCity({ city: "" });
    setState({ state: "" });
    setCounty({ county: "" });
    setItems(specificBeachItems);
  }
  // console.log(lostItems);
  // console.log(locations);

  function handleSelectBeach(beach, id) {
    // const findBeach = locations.find((beach) => beach?.name === selectedBeach);
    setBeachObj(beach, id);
  }

  return (
    <>
      <div className="locations-page">
        <h2>Locations</h2>
        <div className="location-container">
          {locations.map((location) => (
            <div
              className="location-tile"
              onClick={() =>
                navigate(`/locations/${location?._id}/singlelocation`)
              }
            >
              <div>{location?.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
