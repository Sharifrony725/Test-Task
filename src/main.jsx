import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import router from './Routes/Routes.jsx';
import {  RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-screen-2xl mx-auto">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);
