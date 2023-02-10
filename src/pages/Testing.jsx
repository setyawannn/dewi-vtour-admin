import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";

const Testing = () => {
  return (
    <section className="detail h-5/6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-5">Detail Tour</h2>
      <Link
        to={"/"}
        className="px-5 py-2 rounded-md bg-green-700 text-white text-md font-medium tracking-wider"
      >
        Kembali
      </Link>
      <div className="form-wrap">
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2  mt-10">
            <Input
              colspan=""
              label="Nama Desa Wisata"
              type="text"
              placeholder="Kampung Warna Warni"
            />
            <Input colspan="" label="Harga" type="number" placeholder="10000" />
            <Input colspan="" label="Harga" type="file" placeholder="" />
            <Input
              colspan=""
              label="Link Virtual Tour"
              type="text"
              placeholder="https://ciboox-id.github.io/keramik-dinoyo/"
            />
            <Input
              colspan="col-span-2"
              label="Lokasi"
              type="text"
              placeholder="Jl. Zaenal Zakse Jl. Ir. H. Juanda 6, Jodipan, Kec. Blimbing, Kota Malang, Jawa Timur"
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

export default Testing;
