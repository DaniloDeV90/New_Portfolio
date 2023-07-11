import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Home.module.css"
const Home = () => {
  return (
    <section className={styles.home} id={styles.home}>
        <div className={styles.home_content}>
            <h1>Olá, eu sou <span>Danilo</span></h1>
            <div className={styles.text_animate}>
                <h3>Dev Full Stack</h3>

            </div>
            <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, eligendi?</p>
            <div className={styles.btn_box}>
                <NavLink to={"#"} className={styles.btn}>Hire Me</NavLink>
                <NavLink to={"#"} className={styles.btn}>lET1s</NavLink>
            </div>
        </div>
        <div className={styles.home_sci}>
        <NavLink to={"#"}><i className='bx bxl-linkedin-square' id={styles.icon}></i></NavLink>
       
        </div>
    </section>
  )
}

export default Home