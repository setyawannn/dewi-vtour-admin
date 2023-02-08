import React from "react";
import ReportCard from "../components/ReportCard";

const Dashboard = () => {
  const sellData = [
    { name: "Tiket Terjual", value: 15 },
    { name: "Total Income", value: 300000 },
    { name: "Desa Wisata", value: 4 },
    { name: "Opolah", value: 5 },
  ];

  const dataDesa = [
    {
      name: "Kampung Warna Warni",
      price: 25000,
      location:
        "2J8Q+W47, Jl. Zaenal Zakse Jl. Ir. H. Juanda 6, Jodipan, Kec. Blimbing, Kota Malang, Jawa Timur",
    },
    {
      name: "Kampung Heritage Kajoetangan",
      price: 25000,
      location:
        "2J8Q+W47, Jl. Zaenal Zakse Jl. Ir. H. Juanda 6, Jodipan, Kec. Blimbing, Kota Malang, Jawa Timur",
    },
    {
      name: "Kampung Keramik Dinoyo",
      price: 25000,
      location:
        "2J8Q+W47, Jl. Zaenal Zakse Jl. Ir. H. Juanda 6, Jodipan, Kec. Blimbing, Kota Malang, Jawa Timur",
    },
    {
      name: "Kampung Kampung Topeng Malangan",
      price: 25000,
      location:
        "2J8Q+W47, Jl. Zaenal Zakse Jl. Ir. H. Juanda 6, Jodipan, Kec. Blimbing, Kota Malang, Jawa Timur",
    },
  ];

  return (
    <div className="dashboard-wrap w-full mt-4">
      <div className="hello mb-4">
        <h2 className="text-2xl font-semibold text-gray-900">Hallo, Admin</h2>
      </div>
      <div className="card-wrap grid grid-cols-4 gap-4">
        {sellData.map((val) => {
          return <ReportCard title={val.name} value={val.value} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
