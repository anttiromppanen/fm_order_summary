import backgroundOverlayMobile from "./assets/images/pattern-background-mobile.svg";
import backgroundOverlayDesktop from "./assets/images/pattern-background-desktop.svg";
import Card from "./components/Card";

function App() {
  return (
    <div className="bg-userPaleBlue w-full h-screen p-4 flex justify-center items-center">
      <picture>
        <source media="(min-width: 900px)" srcSet={backgroundOverlayDesktop} />
        <source media="(max-width: 899px)" srcSet={backgroundOverlayMobile} />
        <img 
          src={backgroundOverlayMobile} 
          alt="Background overlay" 
          className="w-full absolute top-0 left-0" 
        />
      </picture>
      <Card />
    </div>
  );
}

export default App;
