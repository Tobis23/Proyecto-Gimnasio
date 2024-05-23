import styles from '../componentes/unete_ya.module.scss'
import { Link } from "react-router-dom";
import { useState } from 'react';

export function Unete_ya () {
        const [values, setValues] = useState({
            email: "",
            user: "",
            password: "",
        });
    
    const handleInputChange = (event) => {
        const {name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleForm = (event) => {
        event.preventDefault();
        console.log(values);
    };


    return (
      //-------Clases para Scss-------//
      <div className={styles.uneteya}>
        <form onSubmit={ handleForm }>
          <div className={styles.container}>
            <div className={styles.title}>
                Completa el formulario 
            </div>
            <div className={styles.inputs}>
                <input type="text" placeholder="Correo electronico" name="email" value= {values.email} onChange={handleInputChange} required/>
                <input type="text" name="user" placeholder="Nombre de usuario" value= {values.user} onChange={handleInputChange} required/>      
                <input type="password" placeholder="Contraseña" name="password" value= {values.password} onChange={handleInputChange} required/>
                <button type="submit" title="Ingresar" name="Ingresar">Crear cuenta</button>
            </div>
            
            <div className={styles.options}>
                <Link to="/login">¿Ya tienes cuenta? Inicia sesion aqui!</Link>
            </div>
          </div>
          </form>
      </div>
      
    )
}

