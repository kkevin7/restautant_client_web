import React from "react";

const Orden = ({ orden }) => {
  return (
    <div className="sm:w-1/2 lg:w-1/3 px-2 mb-4">
      <div className="p-3 shadow-md bg-white">
        <h1 className="text-yellow-600 text-lg font-bold">{orden.id}</h1>
        {orden.orden.map((platillos, i) => (
          <p key={platillos.id + i} className="text-gray-600">
            {platillos.cantidad} {platillos.nombre}
          </p>
        ))}
        <p className="text-gray-700 font-bold">
          Total a Pagar: $ {orden.total}
        </p>

        {orden.tiempoentrega === 0 && (
          <div>
            <label htmlFor="" className="block text-gray-700 font-bold mb-2">
              Tiempo de Entrega
            </label>
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:shadow-outline"
              min="1"
              max="20"
              placeholder="20"
            />
            <button
              type="submit"
              className="bg-gray-900 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
            >
              Definir Tiempo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orden;
