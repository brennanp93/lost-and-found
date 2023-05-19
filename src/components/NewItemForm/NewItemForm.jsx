import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewItemForm({ locations, user, addLostItem }) {
  const navigate = useNavigate();
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    location: "-- select an option --",
    user: user?._id,
    dateLost: "",
  });
  // console.log(user)
  function handleSubmit(e) {
    e.preventDefault();
    addLostItem(newItem);
    setNewItem({
      name: "",
      description: "",
      location: "-- select an option --",
      user: user?._id,
      dateLost: "",
    });
  }

  function handleChange(evt) {
    const formFields = { ...newItem, [evt.target.name]: evt.target.value };
    setNewItem(formFields);
  }

  // console.log(newItem);
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
          <select type="datalist" onChange={handleChange} name="location">
            <option value="DEFAULT"> -- select an option -- </option>
            {locations.map((location) => (
              <option key={location?._id} value={location?._id}>
                {location?.name}
              </option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
