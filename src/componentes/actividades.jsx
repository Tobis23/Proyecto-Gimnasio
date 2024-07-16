import styles from '../componentes/actividades.module.scss'
import axios from 'axios';
import ejercicio from '../imagenes/ejercicio.png'
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
                <div className={styles.ejercicio}>
                   <div key = {index} className={styles.ejer}>
                      <img src={ejercicio} alt="ejericio" />
                      <span key = {index} >{actividad.nombre_actividad}</span>
                      <strong> Conocer </strong>
                   </div>
                </div>
                )}
          </div>
          
        </div>
      </div>
    )
}