import { poppins } from '@/utils/fonts'
import styles from './bulletFilter.module.css'

const BulletFilter = ({ title }: { title: string }) => {
  return (
    <button className={`${styles.button} ${poppins.className}`}>
      {title}
    </button>
  )
}

export default BulletFilter