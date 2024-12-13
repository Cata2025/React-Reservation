import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Greetings from "./pages/Greetings";
import { Routes, Route } from "react-router";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="full">
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/greetings" element={<Greetings />} />
      </Routes>
    </div>
  );
}

export default App;
