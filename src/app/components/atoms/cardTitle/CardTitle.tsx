import { poppins } from '@/utils/fonts'
import styles from './cardTitle.module.css'

const CardTitle = ({ title }: { title: string }) => {
  return (
    <h3 className={`${styles.title} ${poppins.className}`}>{title}</h3>
  )
}

export default CardTitle