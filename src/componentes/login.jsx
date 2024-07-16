import styles from '../componentes/login.module.scss'
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

export function Login ({setUser,closeModal2}) {

    const [values, setValues] = useState({
        user: "",
        password: "",
    });
    
    const [error, setError] = useState(false)

    const handleInputChange = (event) => {
        const {name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleForm = (event) => {
        event.preventDefault();
        console.log(values)
        axios.post('http://localhost:80/api/login_Miembros', {
            user: values.user,
            password: values.password
          })
          .then(function (response) {
            console.log(response)
            setUser(values.user)
            closeModal2(true);
          })
          .catch(function (error) {
            alert("Usuario o contraseña incorrecta")
          });



    };

    return (
        //-------Clases para Scss-------//
        <div className={styles.login}>
        <form onSubmit={handleForm} className={styles.form}>
            <div className={styles.container}>
                <div className={styles.title}>
                    Iniciar Sesión
                </div>
                <div className={styles.inputs}>
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
                    <button type="submit">Login</button>
                </div>
                <div className={styles.options}>
                    <Link to="/">¿No tienes cuenta? Regístrate</Link>
                </div>
            </div>
        </form>
    </div>
    
)
}