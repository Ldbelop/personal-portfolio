import styles from './subSection.module.css'
import { poppins } from '@/utils/fonts'

const SubSection = ({ title }: {title: string}) => {
  return (
    <h2 className={`${styles.title} ${poppins.className}`}>{title}</h2>
  )
}

export default SubSection