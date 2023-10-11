import styles from './experienceJob.module.css'
import JobTitle from '@/app/components/atoms/jobTitle'
import JobInfo from '@/app/components/atoms/jobInfo'
import JobDescription from '@/app/components/atoms/jobDescription'

const ExperienceJob = ({ titleText, place, textPayload, textDescription }: { titleText: string, place: string, textPayload: string, textDescription: string}) => {

  return (
    <div className={styles.container}>
      <div className={styles.ballContainer}>
        <div className={styles.ball}></div>
      </div>
      <JobTitle titleText={titleText} place={place}/>
      <JobInfo textPayload={textPayload} place={place}/>
      <JobDescription descText={textDescription}/>
    </div>
  )
}

export default ExperienceJob