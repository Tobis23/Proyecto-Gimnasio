import styles from '../componentes/footer.module.scss'
import youtube from '../imagenes/youtube.png'
import instagram from '../imagenes/instagram.png'
import facebook from '../imagenes/facebook.png'
import ubicacion from '../imagenes/ubicacion.png'
import telefono from '../imagenes/telefono.png'
import mail from '../imagenes/mail.png'

export function Footer() {
    return (
        //-------Clases para Scss-------//
        <div className={styles.footer}>
            <div className={styles.redes}>

                <div className={styles.titulo}>SEGUINOS EN NUESTRAS REDES SOCIALES</div>

                <div className={styles.icono}>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <img src={youtube} alt="youtube" /> <span>Youtube</span>
                </a>
                </div>
                <div className={styles.icono}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="facebook" /> <span>Facebook</span>
                </a>
                </div>
                <div className={styles.icono}>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="instagram" /> <span>Instagram</span>
                </a>
                </div> 
            </div>
                <div className={styles.sedes}>

            <div className={styles.titulo}>NUESTRAS SEDES</div>

                <div className={styles.sede}>
                    <img src={ubicacion} alt="ubi" /> <span>Avenida saavedra 5165</span>
                </div>
                <div className={styles.sede}>
                    <img src={ubicacion} alt="ubi" /> <span>Plaza españa</span>
                </div>
                <div className={styles.sede}>
                    <img src={ubicacion} alt="ubi" /> <span>Calle San Martin 1300</span>
                </div> 
            </div>
            <div className={styles.contactos}>

                <div className={styles.titulo}>CONTACTANOS</div>

                <div className={styles.contacto}>
                    <img src={mail} alt="mail" /> <span>GimnasioProyecto@gmail.com</span>
                </div>
                <div className={styles.contacto}>
                    <img src={telefono} alt="tel" /> <span>011-284848 / 154333548</span>
                </div> 
            </div>
        </div>
    )
}