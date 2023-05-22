import { useState, useEffect } from "react";
import FilterForm from "../FilterForm";
import { staticStates } from "../../data.js";

export default function LostItems({
  locations,
  getItemsByBeach,
  specificBeachItems,
  filterDataFunction,
}) {
  const [beachObj, setBeachObj] = useState([{}]);
  const [filterObj, setFilterObj] = useState({
    state: null,
    county: null,
    city: null,
    name: null,
  });

  console.log(filterObj);
  function handleSubmit(evt) {
    evt.preventDefault();
    getItemsByBeach(beachObj, beachObj._id);
  }

  let stateNames = [...new Set(locations.map((beach) => beach?.state))];
  let countyNames = [...new Set(locations.map((beach) => beach?.county))];
  let cityNames = [...new Set(locations.map((beach) => beach?.city))];

  // console.log(cityNames)

  function handleStateChange(e) {
    const selectState = e.target.value;
    filterDataFunction(selectState);
    console.log(selectState)
  }

  function handleChange(evt) {
    const searchObj = { ...filterObj, [evt.target.name]: evt.target.value };
    // console.log(searchObj,"SOOOO")
    filterDataFunction(searchObj);
    // setFilterObj(searchObj);
    const selectedBeach = evt.target.value;
    const findBeach = locations.find((beach) => beach?.name === selectedBeach);
    setBeachObj(findBeach);
  }

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
          <select type="datalist" onChange={handleChange} name="county">
            <option value="DEFAULT"> -- select an option -- </option>
            {countyNames.map((county, idx) => (
              <option key={idx} value={county}>
                {county}
              </option>
            ))}
          </select>
          <label htmlFor="">City</label>
          <select type="datalist" onChange={handleChange} name="city">
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
