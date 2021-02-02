import './App.css';
import {Router} from "@reach/router";
import PirateAll from "./components/PirateAll";
import PirateOne from "./components/PirateOne";
import PirateEdit from "./components/PirateEdit";
import PirateNew from "./components/PirateNew";


function App() {
  return (
    <div className="App">
      <Router>
        <PirateAll path="/" />
        <PirateEdit path="/pirates/:id/edit" />
        <PirateNew path="/pirates/new" />
        <PirateOne path="/pirates/:id" />     
      </Router>
    </div>
  );
}

export default App;
