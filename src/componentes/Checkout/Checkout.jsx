import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import back from "../../imagenes/iconos/icons8-arrow-50.png";
import './Checkout.css';
import { useOrder } from '../../context/MisOrdenesContext';


const Checkout = () => {
    const { carrito, vaciarCarrito2, total, cantidadTotal } = useContext(CarritoContext);
    const { agregarAMisOrdenes } = useOrder(); // Obtén la función desde el contexto 

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
                        // Llama a la función para agregar el orderId al contexto de MisOrdenes
                        agregarAMisOrdenes(docRef.id);
                    })
                    .catch(error => {
                        console.error("Error al crear la orden: ", error);
                        setError("No se pudo crear la orden: " + error.message);
                    });
            })
            .catch(error => {
                console.error("No se pudo actualizar el stock ", error);
                setError("No se pudo actualizar el stock");
            });
    };

    return (
        <div className="container-checkout">
            <div className="card-checkout">
                <Link to="/cart" className="back"><img src={back} alt="" /></Link>
                <h3 className="poppins title-checkout">Jardin Online <br />Checkout</h3>

                <form onSubmit={manejadorSubmit}>
                    <div className="container-productos-checkout">
                        <h3 className="poppins">Productos:</h3>
                        {
                            carrito.map(producto => (
                                <div className="poppins productos-checkout" key={producto.item.id}>
                                    <p>{producto.item.nombre} x {producto.cantidad}</p>
                                    <p>Precio: $ {producto.item.precio}</p>

                                </div>
                            ))
                        }

                    </div>
                    <div className="container-total-checkout poppins">
                        <p>Articulos: {cantidadTotal}</p>
                        <p>Total: ${total}</p>
                    </div>
                    <div className="container-form">
                        <div className="container-label-checkout poppins">
                            <label htmlFor="">Nombre</label>
                            <input type="text" onChange={(e) => setNombre(e.target.value)} />
                        </div>

                        <div className="container-label-checkout poppins">
                            <label htmlFor="">Apellido</label>
                            <input type="text" onChange={(e) => setApellido(e.target.value)} />
                        </div>

                        <div className="container-label-checkout poppins">
                            <label htmlFor="">Teléfono</label>
                            <input type="text" onChange={(e) => setTelefono(e.target.value)} />
                        </div>

                        <div className="container-label-checkout poppins">
                            <label htmlFor="">Email</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="container-label-checkout poppins">
                            <label htmlFor="">Email confirmación</label>
                            <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                        </div>

                        {
                            error && <p> {error} </p>
                        }
                        <div className="container-btn-checkout">
                            <button type='submit' className="btn-checkout"> Finalizar Orden</button>
                        </div>


                        {
                            ordenId && (
                                <div className="container-confirmacion">
                                    <strong className="poppins">Gracias por su compra! tu número de orden es: {ordenId}</strong>
                                </div>

                            )
                        }

                    </div>


                </form>
            </div>

        </div>
    )
}

export default Checkout