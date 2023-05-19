import { useState } from "react";
export default function LostItems2({
  locations,
  user,
  addLostItem,
  lostItems,
  getItemsByBeach,
  specificBeachItems,
}) {
  const [beachObj, setBeachObj] = useState([{}]);
  const [city, setCity] = useState("");
  const [county, setCounty] = useState("");
  const [state, setState] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    getItemsByBeach(beachObj, beachObj._id);
  }

  function handleChange(evt) {
    const selectedBeach = evt.target.value;
    const findBeach = locations.find((beach) => beach?.name === selectedBeach);
    setBeachObj(findBeach);
  }

  function handleSelectBeach(beach, id) {
    // const findBeach = locations.find((beach) => beach?.name === selectedBeach);
    setBeachObj(beach, id);
  }
  // let stateArr = locations.map((beach) => beach?.state)
  let stateArr = [...new Set(locations.map((beach) => beach?.state))];

  console.log(specificBeachItems);
  return (
    <>
      <h2>lost items 2</h2>
      <div className="location-container">
        {locations.map((location) => (
          <div className="location-tile">
            <button onClick={()=> handleSelectBeach(location, location?.id)}>{location?.name}</button>
          </div>
        ))}
      </div>
    </>
  );
}
