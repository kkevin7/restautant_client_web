import React, { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../../firebase";
//Components
import Orden from "../ui/Orden";

const Ordenes = () => {
  const { firebase } = useContext(FirebaseContext);
  //state
  const [ordenes, setOrdenes] = useState(null);

  useEffect(() => {
    const obtenerOrdenes = () => {
      firebase.db
        .collection("ordenes")
        .where("completado", "==", false)
        .onSnapshot(handleSnapshot);
    };
    obtenerOrdenes();
  }, []);

  const handleSnapshot = (snapshot) => {
    const ordenes = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setOrdenes(ordenes);
  };

  if (!ordenes) return null;

  return (
    <>
      <h1 className="text-3xl font-light mb-4">Ordenes</h1>
      <div className="sm:flex sm:flex-wrap -mx-3">
      {ordenes.map((orden) => (
        <Orden key={orden.id} orden={orden} />
      ))}
      </div>
    </>
  );
};

export default Ordenes;
