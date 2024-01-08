import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { getDoc, doc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { idItem } = useParams();

    useEffect(() => {
        const nuevoDoc = doc(db, "Inventario", idItem);

        getDoc(nuevoDoc)
            .then(res => {
                console.log({...res.data(), id: res.id});
            })
            .catch(error => console.log("Se prohiben los findes ", error))
    }, [idItem])

    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer