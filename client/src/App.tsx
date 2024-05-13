import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/common.tsx/Navbar";
import Layout from "./components/common.tsx/Layout";
import Homepage from "./components/Homepage/Homapage";
import Footer from "./components/common.tsx/Footer";

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
