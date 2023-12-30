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
    { id: "1", nombre: "colgante soga", stock: 10, precio: 500, descripción: "Colgante trenzado en soga natural, diseñado para elevar y realzar tus plantas con un toque rústico y elegante. Ideal para añadir un estilo bohemio a cualquier espacio, este colgante tejido a mano proporciona una base resistente y segura para exhibir tus plantas colgantes con gracia y encanto.", img: colgantesoga , categoria: "bases"},
    { id: "2", nombre: "hierro nordico", stock: 10, precio: 500, descripción: "Base de hierro nórdico para macetas: un soporte minimalista y robusto que fusiona funcionalidad y estilo. Su diseño escandinavo aporta un toque moderno a tu espacio, ofreciendo estabilidad y elegancia para exhibir tus macetas con un aire contemporáneo y refinado.", img: hierronordico , categoria: "bases"},
    { id: "3", nombre: "portamacetas hierro", stock: 10, precio: 500, descripción: "Portamacetas de hierro con tres patas: una pieza de diseño versátil que equilibra modernidad y simplicidad. Sus tres patas ofrecen estabilidad mientras agregan un acento único a tu entorno. Este soporte de hierro agrega un toque de estilo industrial y funcionalidad atemporal a tus plantas, destacando su belleza desde cualquier ángulo.", img: portamacetasHierro , categoria:"bases"},
    { id: "4", nombre: "tornomoldeada", stock: 10, precio: 180, descripción: 
    "Maceta tornomoldeada: una pieza artesanal que combina forma y función con su diseño elegante y curvilíneo. Moldeada con precisión, esta maceta resalta la belleza natural de tus plantas con su silueta fluida y acabado suave. Su estilo clásico y atemporal añade un toque de sofisticación a cualquier espacio, convirtiéndose en un punto focal encantador para tu vegetación favorita.", img: tornomoldeada, categoria: "macetas"},
    { id: "5", nombre: "ceramica", stock: 10, precio: 180, img: ceramica, descripción: 
    "Maceta de cerámica: una fusión entre arte y funcionalidad, esta pieza de cerámica ofrece un encanto atemporal a tus plantas. Su artesanía fina y acabado esmaltado proporcionan un hogar elegante y duradero para tus vegetales, añadiendo un toque de calidez y estilo a tu entorno interior o exterior. La versatilidad de la cerámica combina perfectamente con cualquier decoración, convirtiendo el cuidado de tus plantas en una experiencia estética.", categoria: "macetas"},
    { id: "6", nombre: "fibrocemento", stock: 10, precio: 180, descripción: "Cubo de fibrocemento: una maceta resistente y contemporánea que fusiona durabilidad y estilo. Fabricada con fibrocemento de alta calidad, esta maceta ofrece una apariencia moderna y minimalista. Su diseño robusto pero ligero permite una fácil movilidad, convirtiéndola en un complemento ideal para realzar tanto espacios interiores como exteriores con un toque de elegancia industrial.", img: fibrocemento, categoria: "macetas"},
    { id: "7", nombre: "plastica conoidal", stock: 10, precio: 180, descripción: 
    "Maceta conoide plástica: una solución versátil y ligera para dar vida a tus plantas. Fabricada en plástico duradero, esta maceta con forma cónica brinda practicidad y facilidad de manejo. Su diseño simple y funcional es perfecto para resaltar la belleza natural de tus plantas, aportando un toque contemporáneo y fresco a cualquier rincón de tu hogar u oficina.", img: conoidal, categoria: "macetas"},
    { id: "8", nombre: "plastica rectangular", stock: 10, precio: 180, descripción:"Maceta rectangular de plástico: un recipiente práctico y moderno que combina funcionalidad con un diseño elegante y limpio. Su forma rectangular proporciona un espacio amplio para el crecimiento de tus plantas, mientras que su construcción en plástico resistente garantiza durabilidad y facilidad de cuidado. Esta maceta versátil es ideal para crear arreglos florales o dar un toque contemporáneo a espacios interiores y exteriores." , img: rectangular, categoria: "macetas"},
    { id: "9", nombre: "cerus cactus", stock: 10, precio: 200, descripción: "El cactus Cerus es una planta de bajo mantenimiento que requiere luz solar directa y un riego escaso y espaciado. Asegúrate de proporcionarle un suelo bien drenado y evitar el exceso de humedad para prevenir enfermedades. Protege su delicada piel de quemaduras solares intensas y, en invierno, resguárdalo de temperaturas extremadamente frías.", img: cereus, categoria: "plantas"},
    { id: "10", nombre: "monstera", stock: 10, precio: 200, descripción: "La Monstera, también conocida como planta de queso suizo, prospera en espacios bien iluminados pero sin luz solar directa. Requiere riegos regulares pero permitiendo que la capa superior del suelo se seque entre cada riego para evitar el encharcamiento. Su crecimiento puede ser rápido, así que es recomendable podarla para controlar su tamaño y mantenerla saludable. Además, es importante limpiar regularmente sus hojas grandes y brillantes para prevenir la acumulación de polvo.", img: monstera, categoria: "plantas"},
    { id: "11", nombre: "calathea", stock: 10, precio: 200, descripción: "La Calathea es una planta que ama la humedad y prefiere luz indirecta o semisombra. Mantén su suelo húmedo pero no empapado, y evita el agua con altos niveles de minerales. Su follaje vibrante y colorido agradece ser rociado ocasionalmente para mantener la humedad del aire a su alrededor. Además, es sensible al frío, así que asegúrate de mantenerla en un ambiente cálido y libre de corrientes de aire para preservar su salud y belleza.", img: calathea, categoria: "plantas"},
    { id: "12", nombre: "colgante", stock: 10, precio: 200, descripción: "Las plantas colgantes, como la hiedra inglesa o el pothos, prosperan en entornos con luz indirecta y requieren riegos regulares, permitiendo que la capa superior del suelo se seque entre cada riego. Su crecimiento hacia abajo proporciona un atractivo visual único y puede necesitar poda ocasional para mantener su forma deseada. Colócalas en macetas con buen drenaje y considera la fertilización periódica para fomentar un crecimiento exuberante y saludable.", img: colgante, categoria: "plantas"},
    { id: "13", nombre: "higuera", stock: 10, precio: 200, descripción: "La higuera es una planta de interior que prospera con luz brillante pero indirecta. Requiere riegos regulares durante la temporada de crecimiento, manteniendo el suelo ligeramente húmedo. En invierno, reduce los riegos para permitir que la tierra se seque más entre cada uno. Podarla puede ser necesario para controlar su tamaño y forma. Además, asegúrate de limpiar regularmente sus hojas grandes y brillantes para mantenerlas libres de polvo y saludables.", img: higuera, categoria: "plantas"},
    { id: "14", nombre: "peperomia", stock: 10, precio: 200, descripción: "La Peperomia es una planta de interior que disfruta de la luz indirecta y moderada. Requiere riegos regulares, pero es importante permitir que la capa superior del suelo se seque entre cada riego para evitar el encharcamiento. Su suelo debe ser bien drenado. Esta planta tolera bien la falta de humedad, pero aprecia ser rociada ocasionalmente para mantener una atmósfera húmeda alrededor de ella. Evita exponerla a corrientes de aire frío y proporciona un ambiente cálido y estable para su óptimo crecimiento.", img: peperomia, categoria: "plantas"},
    { id: "15", nombre: "pothus", stock: 10, precio: 200, descripción: "El Pothos es una planta de interior resistente y versátil que prospera en condiciones de luz indirecta a brillante. Prefiere un suelo ligeramente húmedo y bien drenado, permitiendo que la capa superior se seque entre riegos. Esta planta es bastante tolerante a la falta de agua, pero es importante evitar el encharcamiento. Su crecimiento es rápido y se puede controlar mediante poda para mantener su forma y tamaño deseado. Es ideal para principiantes debido a su fácil cuidado y capacidad para purificar el aire.", img: pothus, categoria: "plantas"},
    { id: "16", nombre: "sansevieria", stock: 10, precio: 200, descripción: "La Sansevieria, también conocida como lengua de suegra o planta serpiente, es una planta resistente que prospera en una amplia gama de condiciones. Tolera niveles de luz baja a brillante y requiere riegos escasos y espaciados. Su suelo debe ser bien drenado para evitar el encharcamiento. Es una planta ideal para interiores debido a su capacidad para purificar el aire. Además, es importante evitar el exceso de humedad en su entorno y protegerla de temperaturas extremadamente frías. Su resistencia la hace perfecta para aquellos con poca experiencia en cuidado de plantas.", img: sansevieria, categoria: "plantas"},
    { id: "17", nombre: "calendula", stock: 10, precio: 900, descripción: "La Caléndula es una planta herbácea conocida por sus vibrantes flores que atraen a insectos beneficiosos al jardín. Florece en primavera y verano, disfrutando de pleno sol y suelos bien drenados. Requiere riegos regulares pero no excesivos, permitiendo que la capa superior del suelo se seque entre riegos. Es una planta resistente que puede tolerar condiciones de sequía moderada. Además, su cuidado incluye la eliminación de flores marchitas para promover una floración continua y saludable.", img: calendula, categoria: "semillas" },
    { id: "18", nombre: "copete", stock: 10, precio: 900, descripción: "La planta Copete, también conocida como Dracaena marginata, es una planta de interior popular y fácil de cuidar. Se caracteriza por sus largas hojas lanceoladas y su forma esbelta. Requiere luz brillante indirecta a luz filtrada y riegos regulares, permitiendo que la capa superior del suelo se seque entre cada riego. Es resistente a condiciones de poca humedad pero agradece ser rociada ocasionalmente para mantener la humedad ambiental. Evita el exceso de agua, ya que puede causar problemas en las raíces. La poda ocasional puede ayudar a mantener su forma y estética.", img: copete, categoria: "semillas" },
    { id: "19", nombre: "viola cornuta", stock: 10, precio: 900, descripción: "La Viola cornuta es una encantadora planta perenne conocida por sus delicadas y coloridas flores en forma de trompeta. Prospera en lugares soleados o parcialmente sombreados y prefiere suelos bien drenados. Requiere riegos regulares para mantener el sustrato húmedo, pero evita el encharcamiento. Esta planta es resistente y puede florecer durante la primavera y el verano, ofreciendo una amplia gama de colores y atractivo ornamental. Es ideal para borduras, macetas o como planta de cubierta vegetal.", img: viola, categoria: "semillas" }
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