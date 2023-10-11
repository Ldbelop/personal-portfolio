import styles from './jobInfo.module.css'
import { poppins } from '@/utils/fonts'

const JobInfo = ({ textPayload, place }: { textPayload: string, place:string }) => {
  return (
    <h4 className={`${styles.info} ${poppins.className}`}>
      {textPayload} <span>at {place}</span>
    </h4>
  )
}

export default JobInfo