import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Settings from "./components/Settings";
import SecondaryArt from "./components/SecondaryArt";
const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/secondaryArt" element={<SecondaryArt />} />
    </Routes>
  );
};
export default Main;
