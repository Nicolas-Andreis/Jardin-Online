import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { idItem } = useParams();

    useEffect(() => {
        // Crear una referencia al documento correspondiente en la colección "Inventario"
        const nuevoDoc = doc(db, "Inventario", idItem);

        // Obtener los datos del documento utilizando la referencia
        getDoc(nuevoDoc)
            .then(res => {
                // Extraer los datos del documento y agregar la propiedad 'id'
                const data = res.data();
                const nuevoProducto = { id: res.id, ...data };
                // Establecer el estado del producto con los datos obtenidos
                setProducto(nuevoProducto);
            })
            .catch(error => console.log("Error al obtener el producto:", error));
    }, [idItem]);

    return (
        <div>
            {/* Renderizar el componente ItemDetail con los datos del producto */}
            <ItemDetail {...producto} />
        </div>
    );
};

export default ItemDetailContainer;