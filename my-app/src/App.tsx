import { Route, Routes } from "react-router-dom";
import "./App.css";
import Continents from "./Screens/continentsList";
import SelectedContinent from "./Screens/selectedContinent";
import SelectedCountry from "./Screens/selectedCountry";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Continents />} />
      <Route
        path="/info/:continentCode"
        element={<SelectedContinent />}
      ></Route>
      <Route path="/info/:countryName" element={<SelectedCountry />}></Route>
    </Routes>
  );
}

export default App;
