import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";

const Checkout = () => {
    const { carrito, vaciarCarrito2, total, cantidadTotal } = useContext(CarritoContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfimacion, setEmailConfirmacion] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [error, setError] = useState("");

    const manejadorSubmit = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfimacion) {
            setError("Por favor completa todos los campos");
            return;
        }

        if (email !== emailConfimacion) {
            setError("Los emails no coinciden");
            return;
        }

        Promise.all(
            carrito.map(async (producto) => {
                try {
                    const productoRef = doc(db, "Inventario", producto.item.id);
                    const productoDoc = await getDoc(productoRef);

                    if (productoDoc.exists()) {
                        const stockActual = productoDoc.data().stock;

                        if (!isNaN(stockActual) && !isNaN(producto.cantidad)) {
                            const nuevoStock = Math.max(stockActual - producto.cantidad, 0);
                            await updateDoc(productoRef, { stock: nuevoStock });
                        } else {
                            throw new Error(`Cantidad o stock no válidos para el producto ${producto.item.id}`);
                        }
                    } else {
                        throw new Error(`El documento para el producto ${producto.item.id} no existe.`);
                    }
                } catch (error) {
                    console.error(`Error al actualizar el stock del producto ${producto.item.id}: ${error}`);
                    setError(`Error al actualizar el stock del producto ${producto.item.id}: ${error.message}`);
                }
            })
        )
        .then(() => {
            const orden = {
                items: carrito.map(producto => ({
                    id: producto.item.id,
                    nombre: producto.item.nombre,
                    cantidad: producto.cantidad
                })),
                total: total,
                fecha: new Date(),
                nombre,
                apellido,
                telefono,
                email
            };

            addDoc(collection(db, "ordenes"), orden)
                .then(docRef => {
                    setOrdenId(docRef.id);
                    vaciarCarrito2();
                })
                .catch(error => {
                    console.error("Error al crear la orden ", error);
                    setError("No se pudo crear la orden");
                });
        })
        .catch(error => {
            console.error("No se pudo actualizar el stock ", error);
            setError("No se pudo actualizar el stock");
        });
    };

    return (
        <div>
            <h3>Checkout</h3>
            <form onSubmit={manejadorSubmit}>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p>{producto.item.nombre} x {producto.cantidad}</p>
                            <p>Precio: $ {producto.item.precio}</p>
                            <hr />
                        </div>
                    ))
                }
                <hr />

                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Teléfono</label>
                    <input type="text" onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Email confirmación</label>
                    <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p> {error} </p>
                }

                <button type='submit'> Finalizar Orden</button>

                {
                    ordenId && (
                        <strong>Gracias por su compra! tu número de orden es: {ordenId}</strong>
                    )
                }

            </form>
        </div>
    )
}

export default Checkout