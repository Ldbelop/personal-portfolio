import styles from './hamMenu.module.css'

const HamMenu = () => {
  return (
    <section className={styles.hamContainer}>
      <div className={styles.patty}></div>
      <div className={styles.patty}></div>
      <div className={styles.patty}></div>
    </section>
  )
}

export default HamMenu