import { useState } from "react";
import "./App.css";
import { DropDown, Navbar, InfoSection, Footer } from "./Components";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <DropDown toggle={toggle} isOpen={isOpen} />
      <InfoSection />
      <Footer />
    </>
  );
}

export default App;
