import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./utils/auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Skills from "./pages/Skills";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <ProtectedRoute exact path="/" onFailureRedirectToPath="/login">
            <Home />
          </ProtectedRoute>
          <ProtectedRoute exact path="/admin" onFailureRedirectToPath="/login">
            <Skills />
          </ProtectedRoute>
          <ProtectedRoute exact path="/skills" onFailureRedirectToPath="/login">
            <Skills />
          </ProtectedRoute>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
