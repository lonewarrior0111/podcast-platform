import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUpPage from "./pages/SignUp";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <ToastContainer />
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
