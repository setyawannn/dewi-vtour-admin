import React from "react";

const TableTour = ({ children }) => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-900 my-4">Desa Wisata</h2>
      <div className="overflow-x-auto rounded-md">
        <table className="min-w-full text-xs">
          <thead className=" bg-blue-700 tracking-wide">
            <tr className="text-left text-gray-100">
              <th className="px-5 py-3">Nama Desa</th>
              <th className="px-5 py-3">Harga Tiket</th>
              <th className="px-5 py-3">Lokasi</th>
              <th className="px-5 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
};

export default TableTour;
