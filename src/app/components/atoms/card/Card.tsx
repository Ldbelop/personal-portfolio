import styles from './card.module.css'
import CardImg from '../cardImg'
import CardTitle from '../cardTitle'
import TechBullet from '../techBullet'
import CardDescription from '../cardDescription'

const Card = () => {
  return (
    <section className={styles.container}>
        <CardTitle title='Apocalipsis Virtual' />
    </section>
  )
}

export default Card