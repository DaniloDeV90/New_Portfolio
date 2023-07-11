import React from 'react'
import styles from "./Skills.module.css"
const Skills = () => {
    return (
        <section className={styles.skills} id={styles.skills}>

            <h2 className={styles.heading}>
                <span>Minhas <span className={styles.span}>Skills</span></span>

            </h2>
            <div className={styles.skills_row}>
                <div className={styles.skills_column}>
                    <h3 className={styles.title}>Coding Skills</h3>

                    <div className={styles.skills_box}>
                        <div className={styles.skills_content}>
                            <div className={styles.progress}>
                                <h3>HTML <span>90%</span></h3>
                                <div className={styles.bar}><span></span></div>
                            </div>
                            <div className={styles.progress}>
                                <h3>CSS <span>70%</span></h3>
                                <div className={styles.bar}><span></span></div>
                            </div>
                            <div className={styles.progress}>
                                <h3>JavaScript <span>70%</span></h3>
                                <div className={styles.bar}><span></span></div>
                            </div>
                            <div className={styles.progress}>
                                <h3>Java <span>90%</span></h3>
                                <div className={styles.bar}><span></span></div>
                            </div>
                            <div className={styles.progress}>
                                <h3>Node <span>90%</span></h3>
                                <div className={styles.bar}><span></span></div>
                            </div>
                            <div className={styles.progress}>
                                <h3>React.js <span>90%</span></h3>
                                <div className={styles.bar}><span></span></div>
                            </div>
                            <div className={styles.progress}>
                                <h3>Postgresql <span>90%</span></h3>
                                <div className={styles.bar}><span></span></div>
                            </div>
                            <div className={styles.progress}>
                                <h3>Mongodb <span>90%</span></h3>
                                <div className={styles.bar}><span></span></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills