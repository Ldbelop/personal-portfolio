import styles from './jobDescription.module.css'
import { poppinsFont } from '@/utils/fonts'

const JobDescription = ({ descText }: { descText: string }) => {
  return (
    <p className={`${poppinsFont.className} ${styles.description}`}>
      { descText }
    </p>
  )
}

export default JobDescription