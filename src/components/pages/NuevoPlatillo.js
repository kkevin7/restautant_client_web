import React from "react";
import {useFormik} from 'formik';

function NuevoPlatillo() {

    //validación y leer los datos del formulario
    const formik = useFormik({
        initialValues: {
            nombre: '',
            precio: '',
            categoria: '',
            imagen: '',
            descripcion: '',
        },
        onSubmit: datos => {
            console.log(datos);
        }
    });

  return (
    <>
      <h1 className="text-3xl font-light mb-4">Agregar Platillo</h1>
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-3xl ">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="nombre"
                className="block text-green-700 text-sm font-bold mb-2"
              >
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                placeholder=" Nombre del Platillo"
                className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="precio"
                className="block text-green-700 text-sm font-bold mb-2"
              >
                Precio
              </label>
              <input
                id="precio"
                type="number"
                value={formik.values.precio}
                onChange={formik.handleChange}
                placeholder=" $20"
                min="0"
                className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="categoria"
                className="block text-green-700 text-sm font-bold mb-2"
              >
                Categoria
              </label>
              <select
                id="categoria"
                value={formik.values.categoria}
                onChange={formik.handleChange}
                className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Seleccione</option>
                <option value="desayuno">Desayuno</option>
                <option value="comida">Comida</option>
                <option value="cena">Cena</option>
                <option value="bebida">Bebidas</option>
                <option value="postre">Postre</option>
                <option value="ensalada">Ensalada</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="imagen"
                className="block text-green-700 text-sm font-bold mb-2"
              >
                Imagen
              </label>
              <input
                id="precio"
                type="file"
                value={formik.values.imagen}
                onChange={formik.handleChange}
                className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="descripcion"
                className="block text-green-700 text-sm font-bold mb-2"
              >
                Descripción
              </label>
              <textarea
                id="nombre"
                type="text"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                placeholder=" Descripcion del platillo"
                className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
              ></textarea>
            </div>

            <input
              type="submit"
              value="Agregar Platillo"
              className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default NuevoPlatillo;
