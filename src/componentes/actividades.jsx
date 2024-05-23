import styles from '../componentes/actividades.module.scss'


export function Actividades () {
    return (
      //-------Clases para Scss-------//
      <div className={styles.actividades}>
        <div className={styles.container}>
          <div className={styles.title}>
              Actividades
          </div>
                <div className={styles.text}>
                    <span>Crossfit</span>
                    <br></br>
                    <span>Funcional</span>
                    <br></br>
                    <span>Pilates</span>
                    <br></br>
                    <span>Spinning</span>
                    <br></br>
                    <span>Zumba</span>
                    <br></br>
                    <span>Yoga</span>
                    <br></br>
                </div>
          <div className={styles.imgActividades}>
          </div>
        </div>
      </div>
    )
}