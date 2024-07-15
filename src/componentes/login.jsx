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
            <form onSubmit={ handleForm }>
            <div className={styles.container}>
                <div className={styles.title}>
                    Bienvenido
                </div>
                <div className={styles.inputs}>
                    <input type="text" autoComplete="off" name="user" placeholder="Nombre de usuario" value= {values.user} onChange={handleInputChange} required/>      
                    <input type="password" placeholder="Contraseña" name="password" value= {values.password} onChange={handleInputChange} required/>
                    <button type="submit" title="Ingresar" name="Ingresar">Login</button>
                </div>
                <div className={styles.options}>
                    <Link to="/">¿Perdiste tu contraseña?</Link>
                    <Link to="/">¿No tienes Cuenta? Registrate</Link>
                </div>
            </div>
            </form>
        </div>
)
}