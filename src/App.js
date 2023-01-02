import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import Navbar from "./scenes/Navbar";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import { useState, useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  console.log(isAboveMediumScreens, "here");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="app">
        <header className="app bg-deep-blue">
          <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          <div className="w-5/6 mx-auto md:h-full">
            {isAboveMediumScreens && <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />}
            <Landing setSelectedPage={setSelectedPage} />
            <LineGradient />
            <div className="w-5/6 mx-auto md:h-full">
              <MySkills />
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
