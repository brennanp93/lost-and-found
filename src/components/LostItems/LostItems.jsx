import { useState, useEffect } from "react";
import FilterForm from "../FilterForm";
import { staticStates } from "../../data.js";
import { filter } from "../../utilities/location-api";

export default function LostItems({
  locations,
  getItemsByBeach,
  specificBeachItems,
  filterDataFunction,
}) {
  const [beachObj, setBeachObj] = useState([{}]);
  const [filterObj, setFilterObj] = useState({
    state: "",
    county: "",
    city: "",
    name: "",
  });

  const [state, setState] = useState({ state: "" });
  const [county, setCounty] = useState({ county: null });
  const [city, setCity] = useState({ city: "" });

  let testFilterObject = {
    state: "",
    county: "",
    city: "",
    name: "",
  };

  useEffect(() => {}, [filterObj]);

  function handleSubmit(evt) {
    evt.preventDefault();
    getItemsByBeach(beachObj, beachObj._id);
  }

  function handleStateChange(evt) {
    evt.preventDefault();
    setState({ state: evt.target.value });
    filterDataFunction({ state: evt.target.value });
  }

  function handleCountyChange(evt) {
    evt.preventDefault();
    setCounty({ county: evt.target.value });
    console.log(county);
    filterDataFunction(state, { county: evt.target.value });
  }

  function handleCityChange(evt) {
    evt.preventDefault();
    setCity({ city: evt.target.value });
    filterDataFunction(state, county, {city: evt.preventDefault})
  }
  function handleChange(evt) {
    const searchObj = { ...filterObj, [evt.target.name]: evt.target.value };
    // console.log(searchObj,"SOOOO")
    // filterDataFunction(searchObj);
    // setFilterObj(searchObj);
    const selectedBeach = evt.target.value;
    const findBeach = locations.find((beach) => beach?.name === selectedBeach);
    setBeachObj(findBeach);
  }
  let stateNames = [...new Set(locations.map((beach) => beach?.state))];
  let countyNames = [...new Set(locations.map((beach) => beach?.county))];
  let cityNames = [...new Set(locations.map((beach) => beach?.city))];
  return (
    <>
      <FilterForm />
      <div>
        <h3>Hello</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">State</label>
          <select type="datalist" onChange={handleStateChange} name="state">
            <option value=""> -- select an option -- </option>
            {staticStates.map((state, idx) => (
              <option key={idx} value={state}>
                {state}
              </option>
            ))}
          </select>
          <label htmlFor="">County</label>
          <select type="datalist" onChange={handleCountyChange} name="county">
            <option value="DEFAULT"> -- select an option -- </option>
            {countyNames.map((county, idx) => (
              <option key={idx} value={county}>
                {county}
              </option>
            ))}
          </select>
          <label htmlFor="">City</label>
          <select type="datalist" onChange={handleCityChange} name="city">
            <option value="DEFAULT"> -- select an option -- </option>
            {cityNames.map((city, idx) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <label htmlFor="">Beach</label>
          <select type="datalist" onChange={handleChange} name="name">
            <option value="DEFAULT"> -- select an option -- </option>
            {locations.map((location, idx) => (
              <option key={location?._id} value={location?.name}>
                {location?.name}
              </option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        {specificBeachItems.map((itemObj, idx) => (
          <p key={itemObj?._id}>{itemObj?.name}</p>
        ))}
      </div>
    </>
  );
}
