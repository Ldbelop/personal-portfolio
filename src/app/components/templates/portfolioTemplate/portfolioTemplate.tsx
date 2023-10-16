import JobDescription from '../../atoms/jobDescription'
import SectionTitle from '../../atoms/sectionTitle'
import styles from './portfolioTemplate.module.css'
import SubSectionTitle from '../../atoms/subSectionTitle'
import BulletFilter from '../../atoms/bulletFilter'
import Card from '../../atoms/card'


const portfolioTemplate = () => {
  return (
    <section className={styles.container}>
      <SectionTitle titleText={'Portfolio'}/>
      <JobDescription descText='I make well-built, pixel-perfect, responsive
web pages/applications.'/>
      <SubSectionTitle title='my works'/>
      <section>
        <BulletFilter title={'Menu 1'}/>
        <BulletFilter title={'Menu 2'}/>
      </section>
      <Card />
    </section>
  )
}

export default portfolioTemplate