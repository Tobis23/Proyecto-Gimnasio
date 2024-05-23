import styles from '../componentes/horariosventana.module.scss'


export function Horariosventana () { 

    return (
        //-------Clases para Scss-------//
        <div className={styles.horariosventana}>
            <div className={styles.container}>
                <div className={styles.title}>
                    Nuestros horarios
                </div>
                <div className={styles.text}>
                    <span>Lunes: 8:00 a 12:00 y 15:00 a 20:00</span>
                    <br></br>
                    <span>Martes: 8:00 a 12:00 y 15:00 a 20:00</span>
                    <br></br>
                    <span>Miercoles: 8:00 a 12:00 y 17:00 a 22:00</span>
                    <br></br>
                    <span>Jueves: 8:00 a 12:00 y 17:00 a 22:00</span>
                    <br></br>
                    <span>Viernes: 17:00 a 20:00</span>
                    <br></br>
                    <span>Sabado: 17:00 a 20:00</span>
                    <br></br>
                </div>
                <div className={styles.img}></div>
            </div>
        </div>
    )


}