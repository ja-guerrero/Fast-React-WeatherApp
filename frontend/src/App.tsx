import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Widget from './components/WeatherWidget';
import './App.css';

function App() {
  return (
   <div className="main">
      <Widget/>
   </div>
)}

export default App;
