import styles from './jobInfo.module.css'
import { poppinsFont } from '@/utils/fonts'

const JobInfo = ({ textPayload, place }: { textPayload: string, place:string }) => {
  return (
    <h4 className={`${styles.info} ${poppinsFont.className}`}>
      {textPayload} <span>at {place}</span>
    </h4>
  )
}

export default JobInfo