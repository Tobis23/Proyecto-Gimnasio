import styles from "../src/app.module.scss"
import ReactPlayer from "react-player"

export function App() {
  return (
//-------Clases para Scss-------//
    <div className={styles.app}>
     <div className={styles.fondo}></div>
      <div className={styles.container}>
        <div className={styles.titulo}><strong>Bienvenido a GimProyect</strong><br/> 
                                        <span>Aqui encontrarás las mejores rutinas de actividades para moldear y tonificar tu cuerpo</span>
        </div>
        <div className={styles.video}>
          <ReactPlayer
          style={{backgroundColor:"black"}}
          url={'https://www.youtube.com/watch?v=Q-f2T21zeTE'}
          controls
          width={'85%'}
          height={'90%'}
          />
        </div>
      </div>
    </div>

  )
}
