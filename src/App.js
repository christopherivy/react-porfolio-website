import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="App">
      <header className="app bg-deep-blue">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </header>
    </div>
  );
}

export default App;
