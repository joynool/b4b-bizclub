import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AuthProvider from "./Context/AuthProvider";
import Login from "./Pages/Authentication/Login/Login";
import PrivateRoute from "./Pages/Authentication/PrivateRoute/PrivateRoute";
import Contact from "./Pages/Contact/Contact";
import Annual from "./Pages/Dashboard/Annual/Annual";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Deposit from "./Pages/Dashboard/Deposit/Deposit";
import Individual from "./Pages/Dashboard/Individual/Individual";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Rules from "./Pages/Rules/Rules";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App ()
{
  return (
    <main>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="rules" element={<Rules />} />
            <Route path="dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
              <Route path="/dashboard/annual" element={<Annual />} />
              <Route path="/dashboard/individual" element={<Individual />} />
              <Route path="/dashboard/deposit" element={<Deposit />} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </main>
  );
};

export default App;
//https://stormy-falls-22010.herokuapp.com/