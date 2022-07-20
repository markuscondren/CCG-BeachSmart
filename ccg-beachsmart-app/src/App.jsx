import { useState } from "react";
import "./App.css";
import "./components/Navbar";
import "./components/Map";
import "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
