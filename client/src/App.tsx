import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Layout from "./components/common/Layout";
import Homepage from "./components/Homepage/Homapage";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
