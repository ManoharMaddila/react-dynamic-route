import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import User from "./User";

export default function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>Dynamic Route Example</h1>
        <nav style={{ marginBottom: "1rem" }}>
          <Link to="/user/1" style={{ margin: "0 1rem" }}>User 1</Link>
          <Link to="/user/2" style={{ margin: "0 1rem" }}>User 2</Link>
          <Link to="/user/3" style={{ margin: "0 1rem" }}>User 3</Link>
        </nav>

        <Routes>
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}
