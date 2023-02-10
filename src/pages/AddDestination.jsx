import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import Input from "../components/Input";

const AddDestination = () => {
  const [data, setData] = useState();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://api-dewi-vtour.vercel.app/api/tour", data)
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
    <section className="detail h-5/6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-5">
        Tambah Desa Wisata
      </h2>
      <Link
        to={"/destination"}
        className="px-5 py-2 rounded-md bg-green-700 text-white text-md font-medium tracking-wider"
      >
        Kembali
      </Link>
      <div className="form-wrap">
        <form method="POST" onSubmit={(e) => handleSubmit(e)}>
          <div className="grid gap-6 mb-6 md:grid-cols-2 mt-10">
            <Input
              colspan=""
              label="Nama Desa Wisata"
              type="text"
              name={"name"}
              value={""}
              onChange={(e) => handleChange(e)}
            />
            <Input
              colspan=""
              label="Harga"
              type="number"
              name={"price"}
              value={""}
              onChange={(e) => handleChange(e)}
            />
            <Input
              colspan=""
              label="Gambar"
              type="text"
              name={"image"}
              value={""}
              onChange={(e) => handleChange(e)}
            />
            <Input
              colspan=""
              label="Link Virtual Tour"
              type="text"
              name={"vtour"}
              value={""}
              onChange={(e) => handleChange(e)}
            />
            <Input
              colspan="col-span-2"
              label="Lokasi"
              type="text"
              name={"location"}
              value={""}
              onChange={(e) => handleChange(e)}
            />

            <div className="col-span-2 mt-4">
              <input
                type="submit"
                className="bg-blue-700 border cursor-pointer text-white tracking-wider text-md font-semibold rounded-lg block w-full p-2.5"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddDestination;
