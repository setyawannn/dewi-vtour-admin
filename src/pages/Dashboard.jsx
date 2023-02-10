import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { PropagateLoader } from "react-spinners";
import ReportCard from "../components/ReportCard";
import TableBody from "../components/TableBody";
import TableTour from "../components/TableTour";

const Dashboard = () => {
  const sellData = [
    { name: "Tiket Terjual", value: 15 },
    { name: "Total Income", value: 300000 },
    { name: "Desa Wisata", value: 4 },
    { name: "Opolah", value: 5 },
  ];

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api-dewi-vtour.vercel.app/api/tour")
      .then((res) => {
        setData(res.data.tours);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`https://api-dewi-vtour.vercel.app/api/tour/${id}`)
      .then((e) => {
        toast.success(e.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="dashboard-wrap w-full mt-4 h-5/6 overflow-y-scroll">
      <div className="hello mb-4">
        <h2 className="text-2xl font-semibold text-gray-900">Hallo, Admin</h2>
      </div>
      <div className="card-wrap grid grid-cols-4 gap-6">
        {sellData.map((val, index) => {
          return (
            <div key={index}>
              <ReportCard title={val.name} value={val.value} />
            </div>
          );
        })}
      </div>
      <div className="table-wrap flex justify-center items-center mt-8">
        {loading && <PropagateLoader color="#1D4ED8" />}
        {data && (
          <TableTour>
            {data.map((val) => {
              return (
                <tr
                  key={val._id}
                  className="border-b border-opacity-20 bg-gray-50"
                >
                  <TableBody
                    id={val._id}
                    name={val.name}
                    price={val.price}
                    location={val.location}
                    onClick={() => {
                      handleDelete(val._id);
                    }}
                  />
                </tr>
              );
            })}
          </TableTour>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
