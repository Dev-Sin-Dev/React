import React from "react";
import Navbar from "./components/navigation.js";
import Start from "./components/start.js";
import Footer from "./components/footer.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Start />
      <Footer />
    </div>
  )
}

export default App;