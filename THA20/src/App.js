import React, { useState } from "react";
import "./styles.css";
import Card from "./components/Card";
import Container from "./components/Container";
import items from "./items.json";

function App() {
  const [state, setState] = useState(items);
  return (
    <div className="container">
      <div>
        <Container />
      </div>
      <div className="cards">
        {state.length > 0 ? (
          state.map((food, id) => {
            return (
              <Card setState={setState} state={state} food={food} key={id} />
            );
          })
        ) : (
          <p>No item in your list</p>
        )}
      </div>
    </div>
  );
}
export default App;
