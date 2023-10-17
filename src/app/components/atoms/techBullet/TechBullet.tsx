import { poppins } from '@/utils/fonts'
import styles from './techBullet.module.css'

const TechBullet = ({ text }: { text: string }) => {
  return (
    <div className={`${styles.bullet} ${poppins.className}`}>{text}</div>
  )
}

export default TechBullet