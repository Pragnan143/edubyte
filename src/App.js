import NoMatch from "./NoMatch";
import Auth from "./components/Auth";
import Dashbord from "./components/Dashbord";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import Coursepage from "./components/Coursepage";
const App = () => {
  return (
    <div className="App">
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashbord />} />
            <Route path="/course/:id" element={<Coursepage />} />
            <Route path="/*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </div>
  );
};

export default App;
