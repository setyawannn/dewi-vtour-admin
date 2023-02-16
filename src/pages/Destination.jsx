import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import SearchIcon from "../assets/icons/SearchIcon";
import TableBody from "../components/TableBody";
import TableTour from "../components/TableTour";

const Destination = () => {
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
      })
      .finally(() => {
        window.location.reload();
      });
  };

  return (
    <section className="destination w-full overflow-y-scroll h-5/6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-5">Destination</h2>
      <Link
        to={"/addtour"}
        className="px-5 py-2 rounded-md bg-green-700 text-white text-md font-medium tracking-wider"
      >
        Tambah
      </Link>

      <div className="data-wrap w-full mt-8">
        <div className="search-wrap">
          <form>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-96 px-4 py-3 pl-10 text-sm font-medium text-gray-900 border focus:outline-none border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Cari desa wisata e.g Kampung Warna Warni"
              />
            </div>
          </form>
        </div>
        <div className="table-wrap flex justify-center items-center">
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
    </section>
  );
};

export default Destination;
