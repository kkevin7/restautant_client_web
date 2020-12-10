import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../firebase";
//Components
import Platillo from "../ui/Platillo";

function Menu() {
  const { firebase } = useContext(FirebaseContext);
  //state
  const [platillos, setPlatillos] = useState(null);

  useEffect(() => {
    const obtenerPlatillos = () => {
      const resultado = firebase.db.collection("productos").onSnapshot(handleSnapshot);
    };
    obtenerPlatillos();
  }, []);

  //Snapshot nos permite utilizar la base de datos en tiempo real de firestore
  const handleSnapshot = async (snapshot) => {
    const platillos = await snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setPlatillos(platillos);
  };

  if(!platillos) return null;

  return (
    <>
      <h1 className="text-3xl font-light mb-4">Menu</h1>
      <Link
        to="/nuevo-platillo"
        className="ml-3 bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold"
      >
        Agregar Platillo
      </Link>
      {platillos.map((platillo) => (
        <Platillo key={platillo.id} platillo={platillo} />
      ))}
    </>
  );
}

export default Menu;
