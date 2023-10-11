import styles from './experienceTemplate.module.css'
import SectionTitle from '@/app/components/atoms/sectionTitle/SectionTitle'
import ExperienceJob from '@/app/components/molecules/experienceJob/ExperienceJob'
import { jobList, Job } from '@/app/jobList'
import { makeSlug } from '@/app/services/textService'

const ExperienceTemplate = () => {
  const jobsToRender = jobList.map((job: Job, index: number): React.JSX.Element => {
    return <ExperienceJob titleText={job.title} place={job.place} textPayload={job.payload} textDescription={job.description} key={`${makeSlug(job.title)} ${index}`} />
  });

  return (
    <section className={styles.experienceContainer} id='Experience'>
      <SectionTitle titleText={'Experience'}/>
      {jobsToRender}
    </section>
  )
}

export default ExperienceTemplate