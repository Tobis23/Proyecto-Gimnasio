import styles from '../componentes/login.module.scss'
import { Link } from "react-router-dom";
import { useEffect ,useState } from 'react';
import axios from 'axios';

export function Login ({setUser,closeModal2}) {

    const [miembro, setMiembro] = useState([])

    const fetchData = () => {
        return axios.get("http://localhost:80/api/miembros")
        .then((response) => setMiembro(response.data));
    }
    
    useEffect(() => {
        fetchData();
    }, [])



    const [values, setValues] = useState({
        user: "",
        password: "",
    });
    
    const [error, setError] = useState(false)

    const handleInputChange = (event) => {
        console.log(miembro)
        const {name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleForm = (event) => {
        event.preventDefault();
        //console.log(values);
        

        if (values.user != "admin" || values.password != "admin"){
            alert("Usuario o contraseña incorrecta")
        } else {
           setUser(values.user)
           closeModal2(true);
        }
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
                    <input type="text" name="user" placeholder="Nombre de usuario" value= {values.user} onChange={handleInputChange} required/>      
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