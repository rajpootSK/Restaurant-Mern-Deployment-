import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home/Home.jsx";
import Success from "./Pages/Success/Success.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;
