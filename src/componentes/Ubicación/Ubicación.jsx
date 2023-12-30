import React from 'react'
import './Ubicación.css' 
const ubicación = () => {
    return (
        <div className='container-ubicación'>
            <div className='card-ubicación'>
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.1794772925896!2d-62.27891392537266!3d-38.7136881860026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbca64414c643%3A0xa847570da1fcdc27!2sVieytes%20719%2C%20B8000%20AEO%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1703734752185!5m2!1ses!2sar"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p>Direccion: vieytes 719 <br />
            horarios: abierto todos los dias de 8 a 16 hs <br />
            </p>
            </div>
            
        </div>

    )
}

export default ubicación