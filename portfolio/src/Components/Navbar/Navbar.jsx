import React, { useEffect, useRef, useState } from 'react'
import styles from "./Navbar.module.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const elementoRef = useRef(null);
    const [tamanho, setTamanho] = useState({ largura: window.innerWidth, altura: window.innerHeight })
    const [estilo,setEstilo] = useState ({display: "block"});
    useEffect(() => {
      const handleResize = () => {
        setTamanho({ largura: window.innerWidth, altura: window.innerHeight });
      };
   
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
useEffect (() => {
 
    if (tamanho.largura > 768) setEstilo ({display:"block"})
},)
  

const ev = () => {

const resultado = estilo.display === "block" ? "none" : "block"


setEstilo ({display:resultado})

}



   
  return (
    
  <header className={styles.header} id='header'>

 <NavLink  to={""} className={styles.logo}  >Danilo.</NavLink>
 <div className='bx bx-menu' id={styles.menu_icon} onClick={ev}></div>
 <nav className={styles.navbar} style={estilo} ref={elementoRef}>
 <NavLink  to={"/"} className={styles.links}>Home</NavLink>
 <NavLink  to={"/Contact"}className={styles.links}>Contato</NavLink>
 <NavLink  to={"/Projetos"}className={styles.links}>Projetos</NavLink>
 <NavLink  to={"/Skills"}className={styles.links}>Skills</NavLink>
 </nav>
  </header>
  )
}

export default Navbar