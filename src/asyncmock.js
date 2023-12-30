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
    { id: "1", nombre: "colgante soga", stock: 10, precio: 500, descripción: "Colgante trenzado en soga natural, diseñado para elevar y realzar tus plantas con un toque rústico y elegante.", img: colgantesoga , categoria: "bases"},
    { id: "2", nombre: "hierro nordico", stock: 10, precio: 500, descripción: "Base de hierro nórdico para macetas: un soporte minimalista y robusto que fusiona funcionalidad y estilo.", img: hierronordico , categoria: "bases"},
    { id: "3", nombre: "portamacetas hierro", stock: 10, precio: 500, descripción: "Portamacetas de hierro con tres patas: Sus tres patas ofrecen estabilidad mientras agregan un acento único a tu entorno. Este soporte de hierro agrega un toque de estilo industrial y funcionalidad atemporal a tus plantas.", img: portamacetasHierro , categoria:"bases"},
    { id: "4", nombre: "tornomoldeada", stock: 10, precio: 180, descripción: 
    "Maceta tornomoldeada: una pieza artesanal que combina forma y función con su diseño elegante y curvilíneo. Moldeada con precisión, esta maceta resalta la belleza natural de tus plantas con su silueta fluida y acabado suave.", img: tornomoldeada, categoria: "macetas"},
    { id: "5", nombre: "ceramica", stock: 10, precio: 180, img: ceramica, descripción: 
    "Maceta de cerámica: una fusión entre arte y funcionalidad, esta pieza de cerámica ofrece un encanto atemporal a tus plantas.", categoria: "macetas"},
    { id: "6", nombre: "fibrocemento", stock: 10, precio: 180, descripción: "Cubo de fibrocemento: una maceta resistente y contemporánea que fusiona durabilidad y estilo. Fabricada con fibrocemento de alta calidad.", img: fibrocemento, categoria: "macetas"},
    { id: "7", nombre: "plastica conoidal", stock: 10, precio: 180, descripción: 
    "Maceta conoide plástica: Fabricada en plástico duradero, esta maceta con forma cónica brinda practicidad y facilidad de manejo.", img: conoidal, categoria: "macetas"},
    { id: "8", nombre: "plastica rectangular", stock: 10, precio: 180, descripción:"Maceta rectangular de plástico: Su forma rectangular proporciona un espacio amplio para el crecimiento de tus plantas, mientras que su construcción en plástico resistente garantiza durabilidad y facilidad de cuidado." , img: rectangular, categoria: "macetas"},
    { id: "9", nombre: "cerus cactus", stock: 10, precio: 200, descripción: "El cactus Cerus es una planta de bajo mantenimiento que requiere luz solar directa y un riego escaso y espaciado.", img: cereus, categoria: "plantas"},
    { id: "10", nombre: "monstera", stock: 10, precio: 200, descripción: "La Monstera, también conocida como planta de queso suizo, prospera en espacios bien iluminados pero sin luz solar directa. Requiere riegos regulares pero permitiendo que la capa superior del suelo se seque entre cada riego para evitar el encharcamiento.", img: monstera, categoria: "plantas"},
    { id: "11", nombre: "calathea", stock: 10, precio: 200, descripción: "La Calathea es una planta que ama la humedad y prefiere luz indirecta o semisombra. Mantén su suelo húmedo pero no empapado, y evita el agua con altos niveles de minerales.", img: calathea, categoria: "plantas"},
    { id: "12", nombre: "colgante", stock: 10, precio: 200, descripción: "Las plantas colgantes, como la hiedra inglesa o el pothos, prosperan en entornos con luz indirecta y requieren riegos regulares, permitiendo que la capa superior del suelo se seque entre cada riego.", img: colgante, categoria: "plantas"},
    { id: "13", nombre: "higuera", stock: 10, precio: 200, descripción: "La higuera es una planta de interior que prospera con luz brillante pero indirecta. Requiere riegos regulares durante la temporada de crecimiento, manteniendo el suelo ligeramente húmedo.", img: higuera, categoria: "plantas"},
    { id: "14", nombre: "peperomia", stock: 10, precio: 200, descripción: "La Peperomia es una planta de interior que disfruta de la luz indirecta y moderada. Requiere riegos regulares, pero es importante permitir que la capa superior del suelo se seque entre cada riego para evitar el encharcamiento.", img: peperomia, categoria: "plantas"},
    { id: "15", nombre: "pothus", stock: 10, precio: 200, descripción: "El Pothos es una planta de interior resistente y versátil que prospera en condiciones de luz indirecta a brillante. Prefiere un suelo ligeramente húmedo y bien drenado, permitiendo que la capa superior se seque entre riegos.", img: pothus, categoria: "plantas"},
    { id: "16", nombre: "sansevieria", stock: 10, precio: 200, descripción: "La Sansevieria, también conocida como lengua de suegra o planta serpiente, es una planta resistente que prospera en una amplia gama de condiciones. Tolera niveles de luz baja a brillante y requiere riegos escasos y espaciados. Su suelo debe ser bien drenado para evitar el encharcamiento.", img: sansevieria, categoria: "plantas"},
    { id: "17", nombre: "calendula", stock: 10, precio: 900, descripción: "La Caléndula es una planta herbácea conocida por sus vibrantes flores que atraen a insectos beneficiosos al jardín. Florece en primavera y verano, disfrutando de pleno sol y suelos bien drenados. Requiere riegos regulares pero no excesivos.", img: calendula, categoria: "semillas" },
    { id: "18", nombre: "copete", stock: 10, precio: 900, descripción: "La planta Copete, también conocida como Dracaena marginata, es una planta de interior popular y fácil de cuidar. Se caracteriza por sus largas hojas lanceoladas y su forma esbelta.", img: copete, categoria: "semillas" },
    { id: "19", nombre: "viola cornuta", stock: 10, precio: 900, descripción: "La Viola cornuta es una encantadora planta perenne conocida por sus delicadas y coloridas flores en forma de trompeta. Prospera en lugares soleados o parcialmente sombreados y prefiere suelos bien drenados.", img: viola, categoria: "semillas" }
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