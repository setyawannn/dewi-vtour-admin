import React from "react";
import { MdEdit } from "react-icons/md";
import { HiTrash, HiEye } from "react-icons/hi";

const TableTour = () => {
  return (
    <div className="container mx-auto mt-8 dark:text-gray-100">
      <h2 className="text-2xl font-semibold text-gray-900 my-4">Desa Wisata</h2>
      <div className="overflow-x-auto rounded-md">
        <table className="min-w-full text-xs">
          <thead className="dark:bg-gray-700 bg-blue-700 tracking-wide">
            <tr className="text-left text-gray-100">
              <th className="px-5 py-3">Nama Desa</th>
              <th className="px-5 py-3">Harga Tiket</th>
              <th className="px-5 py-3">Lokasi</th>
              <th className="px-5 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-opacity-20">
              <td className="px-5 py-3">
                <p>Kampung Warna Warni</p>
              </td>
              <td className="px-5 py-3">
                <p>Rp 25.000</p>
              </td>
              <td className="px-5 py-3 max-w-md">
                <p>
                  2J8Q+W47, Jl. Zaenal Zakse Jl. Ir. H. Juanda 6, Jodipan, Kec.
                  Blimbing, Kota Malang, Jawa Timur
                </p>
              </td>
              <td className="px-5 py-3 text-right">
                <button className="hover:bg-blue-200 p-2 transition rounded-md">
                  <HiEye size={28} color={"green"} />
                </button>
                <button className="mx-3 hover:bg-blue-200 p-2 transition rounded-md">
                  <MdEdit size={28} color={"blue"} />
                </button>
                <button className="hover:bg-blue-200 p-2 transition rounded-md">
                  <HiTrash size={28} color={"red"} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableTour;
