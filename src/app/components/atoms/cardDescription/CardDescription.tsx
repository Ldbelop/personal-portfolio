import { poppins } from '@/utils/fonts'
import styles from './cardDescription.module.css'

const CardDescription = ({ text }: { text: string }) => {
  return (
    <p className={`${styles.text} ${poppins.className}`}>{text}</p>
  )
}

export default CardDescription