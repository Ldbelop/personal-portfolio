import styles from './jobTitle.module.css'
import { poppins } from '@/utils/fonts'

const JobTitle = ({ titleText, place }: { titleText: string, place: string }) => {
  return (
    <h2 className={`${styles.title} ${poppins.className}`}>
      {titleText} <span>at {place}</span>
    </h2>
  )
}

export default JobTitle