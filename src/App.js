import React from "react";
import PropTypes from "prop-types";

const cafeteria = [
  { id: 1, name: "angel in us", phoneNum: "010-0000-0000", rating: "2" },
  { id: 2, name: "starbucks", phoneNum: "010-0000-0000", rating: "3.5" },
  { id: 3, name: "coffee bean", phoneNum: "010-0000-0000", rating: "4" },
  { id: 4, name: "artise", phoneNum: "010-0000-0000", rating: "4.2" },
  { id: 5, name: "imundong-coffeejip", phoneNum: "010-0000-0000", rating: "5" }
];

function PrintCafe({ name, phoneNum, rating }) {
  return (
    <div>
      <h2>I like here, {name}</h2>
      <h3>please call: {phoneNum}</h3>
      <h4>rating: {rating}/5.0</h4>
    </div>
  );
}

PrintCafe.propTypes = {
  name: PropTypes.string.isRequired,
  phoneNum: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div className="App">
      {cafeteria.map(cafe => (
        <PrintCafe
          key={cafe.id}
          name={cafe.name}
          phoneNum={cafe.phoneNum}
          rating={cafe.rating}
        ></PrintCafe>
      ))}
    </div>
  );
}

export default App;
