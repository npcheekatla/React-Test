import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DropDown from "./DropDown";

function App() {
  const CountriesList = [
    { label: "India", value: 1 },
    { label: "Australia", value: 2 },
    { label: "Singapore", value: 3 },
    { label: "Indonesia", value: 4 },
    { label: "Thailand", value: 5 },
    { label: "Phillipines", value: 6 },
  ];
  const myData = ["naga", "prasad"];
  return (
    <div className="App">
      <DropDown />
    </div>
  );
}

export default App;
