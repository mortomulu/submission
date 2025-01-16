import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoutes";
import PublicRoute from "./pages/PublicRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />{" "}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Landing />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
