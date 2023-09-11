import backgroundOverlayMobile from "./assets/images/pattern-background-mobile.svg";
import backgroundOverlayDesktop from "./assets/images/pattern-background-desktop.svg";
import Card from "./components/Card";

function App() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-userPaleBlue p-4">
      <picture>
        <source media="(min-width: 900px)" srcSet={backgroundOverlayDesktop} />
        <img
          src={backgroundOverlayMobile}
          alt="Background overlay"
          className="absolute left-0 top-0 z-0 w-full"
        />
      </picture>
      <Card />
    </div>
  );
}

export default App;
