import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TableTour from "./components/TableTour";
import Dashboard from "./pages/Dashboard";


function App() {

  return (
    <>
      <div className="w-full min-h-screen bg-white flex flex-grow">
        <Sidebar />
        <main className="w-full h-20 text-xl font-semibold justify-end px-16">
          <div className="header-wrap h-20 flex">
            <Header />
          </div>
          <Dashboard />
          <TableTour />
        </main>
      </div>
    </>
  );
}

export default App;
