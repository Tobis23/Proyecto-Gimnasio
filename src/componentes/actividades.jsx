import styles from '../componentes/actividades.module.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';

export function Actividades () {

  const [actividades, setActividades] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:80/api/actividades')
      .then(function (response) {
        console.log(response.data)
        setActividades(response.data)
      })
      .catch(function (error) {
        alert("Error")
      });

  }, []);
  

    return (
      //-------Clases para Scss-------//
      <div className={styles.actividades}>
        <div className={styles.container}>
          <div className={styles.title}>
              Actividades
          </div>
          <div className={styles.text}>
              {actividades!=null && 

              actividades.map((actividad, index) => 
                <div className={styles.text}>
                   <br></br>
                   <span key = {index} >{actividad.nombre_actividad}</span>
                   <br></br>
                </div>
                )}
          </div>
          <div className={styles.imgActividades}>
          </div>
        </div>
      </div>
    )
}