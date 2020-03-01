import React from "react";

function Food({ hate, fav }) {
  return (
    <h1>
      I like {fav}. {hate}
    </h1>
  );
}

function App() {
  return (
    <div className="App">
      Hello
      <Food fav="Potato" hate="no" />
      <Food fav="Pasta" hate="yes" />
      <Food fav="Goguma" hate="no" />
    </div>
  );
}

export default App;
