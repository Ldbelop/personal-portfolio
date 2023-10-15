import styles from './jobDescription.module.css'
import { poppins } from '@/utils/fonts'

const JobDescription = ({ descText }: { descText: string }) => {
  return (
    <p className={`${poppins.className} ${styles.description}`}>
      { descText }
    </p>
  )
}

export default JobDescription