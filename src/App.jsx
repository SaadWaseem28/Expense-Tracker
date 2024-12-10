import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import InvoiceImages from "./pages/InvoiceImages";
import Profile from "./pages/Profile";
import Income from "./pages/Income";
import { FormProvider } from "./context/FormContext";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/invoiceimages" element={<InvoiceImages />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/income" element={<Income />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </FormProvider>
  );
}

export default App;
