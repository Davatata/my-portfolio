import packageJson from "../package.json";
import MainNavigation from "./components/layout/MainNavigation";


function App() {
  return (
    <div className="App">
      <span id="version" className="">
        v{packageJson.version}
      </span>
      <h2>David's Porfolio (coming soon!)</h2>
      <MainNavigation />
    </div>
  );
}

export default App;
