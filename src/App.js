import NoMatch from "./NoMatch";
import Auth from "./components/Auth";
import Dashbord from "./components/Dashbord";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />}>
            <Route path="/dashboard" element={<Dashbord />} />
            <Route path="/*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
