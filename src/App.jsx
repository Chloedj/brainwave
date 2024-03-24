import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/button";
import Header from "./components/header";
import Hero from "./components/Hero";
import Benefits from "./components/benefits";
import Collaboration from "./components/collaboration";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
