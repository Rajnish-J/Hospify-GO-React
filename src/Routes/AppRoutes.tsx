import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { LoginPage } from "../Pages/LoginPage";
import { SignUpPage } from "../Pages/SignUpPage";

import { HomePage } from "../Pages/HomePage";

import { Appointment } from "../Pages/Appointment";
import { AppointmentHistory } from "../Pages/AppointmentHistory";
import { PaymentHistory } from "../Pages/PaymentHistory";
import { Pharmacy } from "../Pages/Pharmacy";

import { About } from "../Pages/About";
import { NotFoundPage } from "../Pages/NotFoundPage";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Homepage" />} />
      <Route path="/Homepage" element={<HomePage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      <Route path="/appointments" element={<Appointment />} />
      <Route path="/appointmenthistory" element={<AppointmentHistory />} />
      <Route path="/paymenthistory" element={<PaymentHistory />} />
      <Route path="/pharmacy" element={<Pharmacy />} />

      <Route path="/about" element={<About />} />
      <Route path="/pagenotfound" element={<NotFoundPage />} />
    </Routes>
  );
};
