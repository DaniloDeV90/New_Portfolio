import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Footer.module.css"
const Footer = () => {
  return (
 <footer>
    <div className={styles.footer_text}>
        <p>Copyring &copy; 2023 by Danilo do Carmo Gonçalves | Todos os direitos reservados</p>
    </div>
  
 </footer>
  )
}

export default Footer