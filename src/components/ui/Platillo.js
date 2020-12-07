import React, { useContext, useRef } from "react";
import { FirebaseContext } from "../../firebase";

const Platillo = ({ platillo }) => {
  const {
    id,
    nombre,
    imagen,
    existencia,
    precio,
    categoria,
    descripcion,
  } = platillo;

  //context de firebase para cambios en la DB
  const { firebase } = useContext(FirebaseContext);

  //Existencia ref acceder al valor direcctamente
  const existenciaRef = useRef(existencia);

  const handleChangeExistencia = () => {
    const existencia = existenciaRef.current.value === "true";
    try {
      firebase.db.collection("productos").doc(id).update({ existencia });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="w-full px-3 mb-4">
      <div className="p-5 shadow-md bg-white">
        <div className="lg:flex">
          <div className="lg:w-5/12 xl:w-3/12">
            <img src={imagen} alt="Imagen Platillo" />

            <div className="sm:flex sm:-mx-2 pl-2">
              <label htmlFor="" className="block mt-5 sm:w-2/4">
                <span className="block text-green-800 mb-2">Existencia</span>
                <select
                  name=""
                  id=""
                  value={existencia}
                  ref={existenciaRef}
                  onChange={handleChangeExistencia}
                  className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:shadow-outline"
                >
                  <option value="true">Disponible</option>
                  <option value="false">No Disponible</option>
                </select>
              </label>
            </div>
          </div>
          <div className="lg:w-7/12 xl:2-9/12 pl-5">
            <p className="font-bold text-2xl text-yellow-600 mb-4">{nombre}</p>
            <p className="text-green-600 mb-4">
              Categoria: {""}
              <span className="text-gray-700 font-bold">
                {categoria.toUpperCase()}
              </span>
            </p>
            <p className="text-green-600 mb-4">{descripcion}</p>
            <p className="text-green-600 mb-4">
              Precio: {""}
              <span className="text-gray-700 font-bold">
                $ {Number(precio).toFixed(2)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platillo;
