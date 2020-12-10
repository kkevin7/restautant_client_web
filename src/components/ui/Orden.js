import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../../firebase";

const Orden = ({ orden }) => {
    const { firebase } = useContext(FirebaseContext);
    //State
    const [tiempoentrega, setTiempoEntrega] = useState("");

    //Define el tiempo de entrega en tiempo real
    const definirTiempo = (id) => {
        try {
            firebase.db.collection('ordenes').doc(id).update({tiempoentrega});
        } catch (error) {
            console.log("Error definir tiempo: ",error);
        }
    }

    if(!orden) return null;

  return (
    <div className="sm:w-1/2 lg:w-1/3 px-2 mb-4">
      <div className="p-3 shadow-md bg-white">
        <h1 className="text-yellow-600 text-lg font-bold">{orden.id}</h1>
        {orden.orden.map((platillos, i) => (
          <p key={ i} className="text-gray-600">
            {platillos.cantidad} {platillos.nombre}
          </p>
        ))}
        <p className="text-gray-700 font-bold">
          Total a Pagar: $ {orden.total}
        </p>

        {orden.tiempoentrega === 0 && (
          <div>
            <label  className="block text-gray-700 font-bold mb-2">
              Tiempo de Entrega
            </label>
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:shadow-outline"
              min="1"
              max="20"
              placeholder="20"
              name="tiempoentrega"
              value={tiempoentrega}
              onChange={e => setTiempoEntrega(parseInt(e.target.value))}
            />
            <button
              type="submit"
              className="bg-gray-900 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
              onClick={() => definirTiempo(orden.id)}
            >
              Definir Tiempo
            </button>
          </div>
        )}

        {orden.tiempoentrega > 0 && (
            <p className="text-gray-700">Tiempo de Entrega:
                <span className="font-bold">{orden.tiempoentrega} Minutos</span>
            </p>
        )}
      </div>
    </div>
  );
};

export default Orden;
