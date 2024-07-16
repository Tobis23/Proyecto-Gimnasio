import styles from '../componentes/horariosventana.module.scss'
import calendario from '../imagenes/calendario.png'


export function Horariosventana () { 

    return (
        //-------Clases para Scss-------//
        <div className={styles.horariosventana}>
            <div className={styles.container}>
                <div className={styles.title}>
                    Nuestros horarios
                </div>
                <div className={styles.text}>

                    <div className={styles.horario}>
                        <div className={styles.hora}>
                            <img src={calendario} alt="calendario" />
                            <span>Lunes</span>
                            <strong>8:00 a 12:00 y 15:00 a 20:00</strong>
                        </div>
                   </div>
                   <div className={styles.horario}>
                        <div className={styles.hora}>
                            <img src={calendario} alt="calendario" />
                            <span>Martes</span>
                            <strong>8:00 a 12:00 y 15:00 a 20:00</strong>
                        </div>
                   </div>
                   <div className={styles.horario}>
                        <div className={styles.hora}>
                            <img src={calendario} alt="calendario" />
                            <span>Miercoles</span>
                            <strong>8:00 a 12:00 y 17:00 a 22:00</strong>
                        </div>
                   </div>
                   <div className={styles.horario}>
                        <div className={styles.hora}>
                            <img src={calendario} alt="calendario" />
                            <span>Jueves</span>
                            <strong>8:00 a 12:00 y 17:00 a 22:00</strong>
                        </div>
                   </div>
                   <div className={styles.horario}>
                        <div className={styles.hora}>
                            <img src={calendario} alt="calendario" />
                            <span>Viernes</span>
                            <strong>17:00 a 20:00</strong>
                        </div>
                   </div>
                   <div className={styles.horario}>
                        <div className={styles.hora}>
                            <img src={calendario} alt="calendario" />
                            <span>Sabado</span>
                            <strong>17:00 a 20:00</strong>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )


}