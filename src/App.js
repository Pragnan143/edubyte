import NoMatch from "./NoMatch";
import Auth from "./components/Auth";
import Dashbord from "./components/Dashbord";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import Coursepage from "./components/Coursepage";
import Schedule from "./components/Schedule";
import Checkoutpage from "./components/Checkoutpage";
const App = () => {
  return (
    <div className="App">
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashbord />} />
            <Route path="/course/:id" element={<Coursepage />} />
            <Route path="/course/checkout/:id" element={<Checkoutpage />} />
            <Route path="/enrolled/:id" element={<Schedule />} />
            <Route path="/*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </div>
  );
};

export default App;
