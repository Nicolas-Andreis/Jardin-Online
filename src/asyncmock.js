import colgantesoga from './imagenes/bases/colgantesoga.jpg';
import hierronordico from './imagenes/bases/Plantas-Faitful-Portamacetas-Hierro-Nordico-1.jpg';
import portamacetasHierro from './imagenes/bases/portamacetas hierro.jpg';
import tornomoldeada from './imagenes/macetas/Faitful-Maceta-Rotomoldeada-Inca-N°40-1.jpg';
import ceramica from './imagenes/macetas/Faitful-viveros-maceta-ceramica-ito-blanco-bicapa-1.jpg';
import fibrocemento from './imagenes/macetas/Plantas-Faitful-Macetas-Fibrocemento-Cubo.jpg';
import conoidal from './imagenes/macetas/Plantas-Faitful-Macetas-Plasticas-Josefina-Matri.jpg';
import rectangular from './imagenes/macetas/Plantas-Faitful-Macetas-Plasticas-TA-Rocio.jpg';
import cereus from './imagenes/plantas/cereus-cactus-olla.jpg';
import monstera from './imagenes/plantas/monstera-deliciosa-planta-maceta.jpg';
import calathea from './imagenes/plantas/planta-calathea-objeto-decoracion-hogar-maceta-terracota.jpg';
import colgante from './imagenes/plantas/planta-colgante-interior-marble-pothos.jpg';
import higuera from './imagenes/plantas/planta-higuera-hoja-violin-maceta.jpg';
import peperomia from './imagenes/plantas/planta-peperomia-sandia-falsa-maceta-gris.jpg';
import pothus from './imagenes/plantas/pothus.png';
import sansevieria from './imagenes/plantas/sansevieria_c00b6264_674x674.jpg';
import calendula from './imagenes/semillas/CALENDULA.jpg';
import copete from './imagenes/semillas/COPETE.jpg';
import viola from './imagenes/semillas/VIOLA-CORNUTA-PENSAMIENTO.jpg';
const productos = [
    { id: "1", nombre: "colgante soga", precio: 500, img: colgantesoga , categoria: "bases"},
    { id: "2", nombre: "hierro nordico", precio: 500, img: hierronordico , categoria: "bases"},
    { id: "3", nombre: "portamacetas hierro", precio: 500, img: portamacetasHierro , categoria:"bases"},
    { id: "4", nombre: "tornomoldeada", precio: 180, img: tornomoldeada, categoria: "macetas"},
    { id: "5", nombre: "ceramica", precio: 180, img: ceramica, categoria: "macetas"},
    { id: "6", nombre: "fibrocemento", precio: 180, img: fibrocemento, categoria: "macetas"},
    { id: "7", nombre: "plastica conoidal", precio: 180, img: conoidal, categoria: "macetas"},
    { id: "8", nombre: "plastica rectangular", precio: 180, img: rectangular, categoria: "macetas"},
    { id: "9", nombre: "cerus cactus", precio: 200, img: cereus, categoria: "plantas"},
    { id: "10", nombre: "monstera", precio: 200, img: monstera, categoria: "plantas"},
    { id: "11", nombre: "calathea", precio: 200, img: calathea, categoria: "plantas"},
    { id: "12", nombre: "colgante", precio: 200, img: colgante, categoria: "plantas"},
    { id: "13", nombre: "higuera", precio: 200, img: higuera, categoria: "plantas"},
    { id: "14", nombre: "peperomia", precio: 200, img: peperomia, categoria: "plantas"},
    { id: "15", nombre: "pothus", precio: 200, img: pothus, categoria: "plantas"},
    { id: "16", nombre: "sansevieria", precio: 200, img: sansevieria, categoria: "plantas"},
    { id: "17", nombre: "calendula", precio: 900, img: calendula, categoria: "semillas" },
    { id: "18", nombre: "copete", precio: 900, img: copete, categoria: "semillas" },
    { id: "19", nombre: "viola cornuta", precio: 900, img: viola, categoria: "semillas" }
]

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

/*actividad numero 3 detalle de un produco i */

//crear una funcion similar a la anterior pero que solo nos retorne un item

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const producto = productos.find(item => item.id === id);
            resolve(producto);
        }, 2000);
    });
};

//tenemos que crear una nueva funcion que retorne una nueva categoria

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(()=> {
            const productosCategoria = productos.filter (item => item.categoria === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}