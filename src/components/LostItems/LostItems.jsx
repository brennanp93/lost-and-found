import { useState } from "react";
export default function LostItems({
  locations,
  user,
  addLostItem,
  lostItems,
  getItemsByBeach,
  specificBeachItems,
}) {
  const [beachObj, setBeachObj] = useState([{}]);

  // console.log(specificBeachItems);
  function handleSubmit(evt) {
    evt.preventDefault();
    getItemsByBeach(beachObj, beachObj._id);
  }

  function handleChange(evt) {
    const selectedBeach = evt.target.value;
    const findBeach = locations.find((beach) => beach?.name === selectedBeach);
    setBeachObj(findBeach);
  }

  return (
    <>
      <div>
        <h3>Hello</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Location</label>
          <select type="datalist" onChange={handleChange} name="location">
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
