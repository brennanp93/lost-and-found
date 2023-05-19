import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewItemForm({ locations }) {
  const navigate = useNavigate();
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    location: "",
    user: "",
    dateLost: "",
  });
  console.log(locations);
  function handleSubmit() {}

  function handleChange() {}
  return (
    <>
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Item Name</label>
          <input
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <label htmlFor="">Item Description</label>
          <input
            type="text"
            name="description"
            value={newItem.description}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <label htmlFor="">Date Lost</label>
          <input
            type="date"
            name="dateLost"
            value={newItem.dateLost}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <label htmlFor="">Location Lost:</label>
          <select type="datalist">
            {locations.map((location) => (
              <option key={location?._id} value={location?.name}>
                {location?.name}
              </option>
            ))}
          </select>
        </form>
      </div>
    </>
  );
}
