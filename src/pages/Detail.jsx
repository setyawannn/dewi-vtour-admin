import axios from "axios";
import { React, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import Input from "../components/Input";

const Detail = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id_destination } = useParams();
  const [detail, setdetail] = useState([]);
  const [updateData, setUpdateData] = useState();

  // Fetch Api
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api-dewi-vtour.vercel.app/api/tour")
      .then((res) => {
        setDatas(res.data.tours);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const filterData = () => {
    setdetail(
      datas.filter((val) => {
        return val._id.toLowerCase().includes(id_destination.toLowerCase());
      })
    );
  };

  useEffect(() => {
    filterData();
    setUpdateData(detail[0]);
  }, [id_destination, datas]);

  const handleChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(
        `https://api-dewi-vtour.vercel.app/api/tour/${updateData._id}`,
        updateData
      )
      .then((e) => {
        toast.success(e.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(updateData);

  return (
    <section className="detail h-5/6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-5">Detail Tour</h2>
      <Link
        to={"/destination"}
        className="px-5 py-2 rounded-md bg-green-700 text-white text-md font-medium tracking-wider"
      >
        Kembali
      </Link>
      <div className="form-wrap">
        {loading && (
          <div className="flex justify-center">
            <PropagateLoader color="#1D4ED8" />
          </div>
        )}
        {datas && (
          <form method="PUT" onSubmit={(e) => handleSubmit(e)}>
            {detail.map((val) => {
              return (
                <div
                  key={val._id}
                  className="grid gap-6 mb-6 md:grid-cols-2 mt-10"
                >
                  <input type="hidden" value={val._id} />
                  <Input
                    colspan=""
                    label="Nama Desa Wisata"
                    type="text"
                    name={"name"}
                    value={val.name}
                    onChange={(e) => handleChange(e)}
                  />
                  <Input
                    colspan=""
                    label="Harga"
                    type="number"
                    name={"price"}
                    value={val.price}
                    onChange={(e) => handleChange(e)}
                  />
                  <Input
                    colspan=""
                    label="Gambar"
                    type="text"
                    name={"image"}
                    value={val.image}
                    onChange={(e) => handleChange(e)}
                  />
                  <Input
                    colspan=""
                    label="Link Virtual Tour"
                    type="text"
                    name={"vtour"}
                    value={val.vtour}
                    onChange={(e) => handleChange(e)}
                  />
                  <Input
                    colspan="col-span-2"
                    label="Lokasi"
                    type="text"
                    name={"location"}
                    value={val.location}
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
              );
            })}
          </form>
        )}
      </div>
    </section>
  );
};

export default Detail;
