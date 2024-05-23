import styles from '../componentes/footer.module.scss'
import logo from '../imagenes/logo2.png'

export function Footer() {
    return (
        //-------Clases para Scss-------//
        <div className={styles.footer}>
            <div className={styles.logo}>
                <a href='/'>
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <div className={styles.titulo}>
                <a>Contacto</a>
                <div className={styles.email}>
                    Email:
                    <b>Proyecto_Gym@email.com</b>
                </div>
                <div className={styles.telefono}>
                    Telefono:
                    <span>441234</span>
                </div>
            </div>
        </div>
    )
}