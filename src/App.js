import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from './form'
import HomePage from './homepage';
import Navbar from './navbar';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  )
}
