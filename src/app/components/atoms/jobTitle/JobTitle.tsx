import styles from './jobTitle.module.css'
import { poppinsFont } from '@/utils/fonts'

const JobTitle = ({ titleText, place }: { titleText: string, place: string }) => {
  return (
    <h2 className={`${styles.title} ${poppinsFont.className}`}>
      {titleText} <span>at {place}</span>
    </h2>
  )
}

export default JobTitle