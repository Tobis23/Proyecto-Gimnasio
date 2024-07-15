import { useState } from "react"
import styles from "../componentes/profile.module.scss"


export function Profile ({setUser}) {
    const [openProfile, setOpenProfile] = useState (false);
    const handleLogout = () => {
        setUser([])
    }
     return(
        <div className={styles.perfil}>
            <button className={styles.botonlogin} onClick={()=>setOpenProfile((prev) => !prev)}><ion-icon name="contact"></ion-icon></button>
            {
                openProfile && (
                <div className={styles.lista}>
                    <ul className={styles.dropdown}>
                        <li>Perfil</li>
                        <li><button className={styles.botonlogout} onClick={handleLogout}>Cerrar sesion</button></li>
                    </ul>
                </div>

                )
            }
            
        </div>



     )
}
