import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { getDoc, doc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { idItem } = useParams();

    useEffect(() => {
        const obtenerProducto = async () => {
            try {
                const nuevoDoc = doc(db, "Inventario", idItem);
                const docSnap = await getDoc(nuevoDoc);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    const nuevoProducto = { id: docSnap.id, ...data };
                    setProducto(nuevoProducto); // Actualizar el estado del producto
                } else {
                    console.log("No se encontró el documento");
                }
            } catch (error) {
                console.error("Error al obtener el documento:", error);
            }
        };

        obtenerProducto();
    }, [idItem]);

    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    );
}

export default ItemDetailContainer;