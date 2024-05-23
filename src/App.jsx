import styles from "../src/app.module.scss"
import ReactPlayer from "react-player"
import imagen from "../src/imagenes/back6.png"
import imagen2 from "../src/imagenes/back1.png"

export function App() {
  return (
//-------Clases para Scss-------//
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.bienvenida}>
            <h1>Empeza a entrenar ya!</h1>
            <div className={styles.background}>
              <img src={imagen} alt="imagenHome" />
            </div>
        </div>
        <div className={styles.video}>
          <ReactPlayer
          style={{backgroundColor:"black"}}
          url={'https://www.youtube.com/watch?v=Q-f2T21zeTE'}
          controls
          width={'85%'}
          height={'90%'}
          light
          playing
          />
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.video2}>
          <ReactPlayer
          style={{backgroundColor:"black"}}
          url={'https://www.youtube.com/watch?v=IsJ2w2JsN2A'}
          controls
          width={'85%'}
          height={'90%'}
          light
          playing
          />
        </div>
          <div className={styles.bienvenida2}>
           <h2>Con entrenadores 100% comprometidos con vos!</h2>
           <div className={styles.background2}>
           <img src={imagen2} alt="imagenHome2" />
          </div>

          </div>



      </div>
    </div>

  )
}
