import React from 'react';
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css';

import { useAuthentication } from '../hooks/useAuthentication';
import { useAuthValue } from '../context/AuthContext';

const Navbar = () => {

  const { user } = useAuthValue();

  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to='/'>
        Mini<span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>  <NavLink to='/'>
          Home
        </NavLink></li>
        {!user && (
          <>
            <li> <NavLink to='/login'>
              Entrar
            </NavLink></li>
            <li> <NavLink to='/register'>
              Cadastrar
            </NavLink></li>
          </>
        )}
         {user && (
          <>
            <li> <NavLink to='/posts/create'>
              Novo Post
            </NavLink></li>
            <li> <NavLink to='/dashboar'>
              Dashboard
            </NavLink></li>
          </>
        )}
        <li> <NavLink to='/about'>
          Sobre
        </NavLink></li>

      </ul>
    </nav>
  )
}

export default Navbar
