import React from 'react';
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css';


const Navbar = () => {

  

  return (
    <nav className={styles.navbar}>
      <div>
        
     
       <img src='unifespp.png' alt="Logo" />
        <h2 className={styles.navbar}>EGRESSOS UNIFESP</h2> 
        </div>
    </nav>
  )
}

export default Navbar
