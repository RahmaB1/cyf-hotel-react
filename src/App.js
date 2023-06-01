import React from "react";
// import Heading from "./Heading";
import Bookings from "./Bookings";
import Footer from "./Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <Bookings />
      <Footer />
    </div>
  );
};

export default App;
