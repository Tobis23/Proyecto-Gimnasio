import { Link } from "react-router-dom";
import { useState } from 'react';
import styles from '../componentes/header.module.scss';
import logo from '../imagenes/logo2.png';
import Modal from '../componentes/modal/Modal'
import { useModal } from "./modal/useModal";
import { Unete_ya } from "./unete_ya";
import { Login } from "./login.jsx";
import { Horariosventana } from './horariosventana.jsx';
import { Actividades } from './actividades.jsx';
import { Profile } from "../componentes/profile.jsx";



export function Header() {

        const [isOpenModal1, openModal1, closeModal1] = useModal(false);
        const [isOpenModal2, openModal2, closeModal2] = useModal(false);
        const [isOpenModal3, openModal3, closeModal3] = useModal(false);
        const [isOpenModal4, openModal4, closeModal4] = useModal(false);

        const [user, setUser] = useState("")
       

    return (
        //-------Clases para Scss-------//
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className={styles.menu}>
                <button className={styles.boton} onClick={openModal4}>Actividades</button>
                <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
                    <Actividades/>
                </Modal>
                <button className={styles.boton} onClick={openModal3}>Horarios</button>
                <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
                    <Horariosventana/>
                </Modal>
                <button className={styles.boton} onClick={openModal1}>Unete ya</button>
                <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                    <Unete_ya/>
                </Modal>
                {   
                    !user.length > 0
                    ?<button className={styles.boton} onClick={openModal2}>Login</button>
                    :<Profile setUser={setUser}/>     
                }
                <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                    <Login setUser={setUser} closeModal2={closeModal2}/>
                </Modal>
                
            </div>
        </div>
    )
    
}

