import React from "react";

const cafeteria = [
  { name: "angel in us", phoneNum: "010-0000-0000" },
  { name: "starbucks", phoneNum: "010-0000-0000" },
  { name: "coffee bean", phoneNum: "010-0000-0000" },
  { name: "artise", phoneNum: "010-0000-0000" },
  { name: "imundong-coffeejip", phoneNum: "010-0000-0000" }
];

function PrintCafe({ name, phoneNum }) {
  return (
    <div>
      <h2>I like here, {name}</h2>
      <h3>please call: {phoneNum}</h3>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {cafeteria.map(cafe => (
        <PrintCafe name={cafe.name} phoneNum={cafe.phoneNum}></PrintCafe>
      ))}
    </div>
  );
}

export default App;
