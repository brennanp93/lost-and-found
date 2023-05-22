import { useState, useEffect } from "react";
export default function FilterForm() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCounty, setSelectedCounty] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  return (
    <>
      <h2>Filter Form</h2>
      <div></div>
      <h4>----------</h4>
    </>
  );
}
