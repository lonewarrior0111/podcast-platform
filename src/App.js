import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header";
import SignUpPage from "./pages/SignUp";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
