import styles from '../componentes/unete_ya.module.scss'
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

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

        axios.post('http://localhost:80/api/registro_Miembros', {
            user: values.user,
            email: values.email,
            password: values.password
          })
          .then(function (response) {
            console.log(response)
            alert('Miembro cargado correctamente')
          })
          .catch(function (error) {
            alert('Error')
          });

    };


    return (
      //-------Clases para Scss-------//
      <div className={styles.uneteya}>
    <form onSubmit={handleForm} className={styles.form}>
        <div className={styles.container}>
            <div className={styles.title}>
                Formulario de registro
            </div>
            <div className={styles.inputs}>
                <div className={styles.inputgrupo}>
                    <span>Email</span>
                    <input
                        type="text"
                        autoComplete="off"
                        placeholder=""
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={styles.inputgrupo}>
                    <span>Usuario</span>
                    <input
                        type="text"
                        autoComplete="off"
                        name="user"
                        placeholder=""
                        value={values.user}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={styles.inputgrupo}>
                    <span>Contraseña</span>
                    <input
                        type="password"
                        placeholder=""
                        name="password"
                        value={values.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Crear cuenta</button>
            </div>
            <div className={styles.options}>
                <Link to="/Login">¿Ya tienes cuenta? Inicia sesión aquí!</Link>
            </div>
        </div>
    </form>
</div>

      
    )
}

