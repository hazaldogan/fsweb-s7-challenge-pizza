import React, { useState } from "react";
import Main from "./layout/Main";
import "./App.css";

const App = () => {
  const [orders, setOrders] = useState([]);

  function addOrder(order) {
    setOrders([...orders, order]);
  }

  return (
    <div className="App">
      <Main handleAddOrder={addOrder} />
    </div>
  );
};
export default App;
