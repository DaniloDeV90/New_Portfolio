import React from 'react'
import styles from "./Contato.module.css"
const Contact = () => {
  return (
   <section className={styles.contact} id={styles.contact}>
     <h2 className={styles.heading}>  <span className={styles.span}>Meu</span> Contato</h2>

     <form action="">
        <div className={styles.input_box}>
            <div className={styles.input_field}>
            <input type="text"  placeholder='Nome' required />
            <span className={styles.focus}></span>

            </div>
            <div className={styles.input_field}>
            <input type="email"  placeholder='Email' required />
            <span className={styles.focus}></span>
            
            </div>
      
        </div>


        <div className={styles.input_box}>
            <div className={styles.input_field}>
            <input type="number"  placeholder='Número' required />
            <span className={styles.focus}></span>

            </div>
            <div className={styles.input_field}>
            <input type="email"  placeholder='Email' required />
            <span className={styles.focus}></span>
            
            </div>
    
        </div>
        <div className={styles.textarea_field}>
        <textarea name="" id="" cols="30" rows="10" placeholder='Your Message' required></textarea>
      </div>

     <div className={  `${styles.btn_box} ${styles.btn} `}>
        <button className={styles.btn}> Submit </button>
     </div>
     </form>
   </section>
  )
}

export default Contact