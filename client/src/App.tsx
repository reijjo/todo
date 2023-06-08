import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import ToDo from "./components/Todo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ToDo />} />
      </Routes>
    </Router>
  );
};

export default App;
