import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Erorr404 from "./pages/Erorr404";
import Testing from "./pages/Testing";
import { Toaster } from "react-hot-toast";
import Destination from "./pages/Destination";
import AddDestination from "./pages/AddDestination";


function App() {

  return (
    <div className="w-full min-h-screen bg-white flex flex-grow max-h-screen overflow-hidden">
      <Sidebar />
      <main className="w-full text-xl font-semibold justify-end px-16">
        <div className="header-wrap h-16 flex">
          <Header />
        </div>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/addtour" element={<AddDestination />} />
            <Route path="/detail/:id_destination" element={<Detail />} />
            <Route path="*" element={<Erorr404 />} />
            <Route path="testing" element={<Testing />} />
          </Routes>
        </Router>
        <Toaster />
      </main>
    </div>
  );
}

export default App;
