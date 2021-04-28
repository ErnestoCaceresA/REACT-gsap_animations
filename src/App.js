import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import SlideBar from "./components/slidebar/SlideBar";
import MainPages from "./components/mainpages/Pages";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <SlideBar />
          <MainPages />
        </div>
      </Router>
    </>
  );
}

export default App;
