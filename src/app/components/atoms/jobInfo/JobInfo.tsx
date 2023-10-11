import styles from './jobInfo.module.css'
import { poppins } from '@/utils/fonts'

const JobInfo = ({ textPayload }: { textPayload: string }) => {
  return (
    <h4 className={`${styles.info} ${poppins.className}`}>
      { textPayload }
    </h4>
  )
}

export default JobInfo