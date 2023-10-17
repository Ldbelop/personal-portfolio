import JobDescription from '../../atoms/jobDescription'
import SectionTitle from '../../atoms/sectionTitle'
import styles from './portfolioTemplate.module.css'
import SubSectionTitle from '../../atoms/subSectionTitle'
import BulletFilter from '../../atoms/bulletFilter'
import Card from '../../atoms/card'
import Technology from '../../atoms/technology'
import { AngularIcon, FigmaIcon, NextIcon, ReactIcon, TypescriptIcon } from '../../icons/icons'

const portfolioTemplate = () => {
  return (
    <section className={styles.wrapper} id='Portfolio'>
      <section className={`${styles.container} ${styles.mobile}`}>
        <SectionTitle titleText={'Portfolio'}/>
        <JobDescription descText='I make well-built, pixel-perfect, responsive web pages/applications.'/>
        <SubSectionTitle title='my works'/>
        <section className={styles.menuSection}>
          <BulletFilter title={'Menu 1'}/>
          <BulletFilter title={'Menu 2'}/>
        </section>
        <Card title='Hotels' description='Final proyect of the Devtools Bootcamp, this webpage mimics the usage of a booking app, it&apos;s packed with server-side rendering, loading states and context management.' techArray={['NextJS', 'React', 'Typescript']}/>
        <SubSectionTitle title='Technical Skills'/>
        <section className={styles.techSection}>
          <Technology techName='Angular'>
            <AngularIcon width={'103px'} height={'103px'} fill1={'#766045'} fill2={'#8F7B5F'}/>
          </Technology>
          <Technology techName='ReactJS'>
            <ReactIcon width={'103px'} height={'103px'} fill={'#766045'}/>
          </Technology>
          <Technology techName='NextJS'>
            <NextIcon width={'103px'} height={'103px'} fill={'#766045'}/>
          </Technology>
          <Technology techName='Typescript'>
            <TypescriptIcon width={'103px'} height={'103px'} fill={'#766045'} bgColor={'#FAF6F0'}/>
          </Technology>
          <Technology techName='Figma'>
            <FigmaIcon width={'103px'} height={'103px'} fill={'#766045'}/>
          </Technology>
        </section>
      </section>
      <section className={`${styles.container} ${styles.landscape}`}>
        <SectionTitle titleText={'Portfolio'}/>
        <JobDescription descText='I make well-built, pixel-perfect, responsive web pages/applications.'/>
        <SubSectionTitle title='my works'/>
        <section className={styles.menuSection}>
          <BulletFilter title={'Menu 1'}/>
          <BulletFilter title={'Menu 2'}/>
        </section>
        <Card title='Hotels' description='Final proyect of the Devtools Bootcamp, this webpage mimics the usage of a booking app, it&apos;s packed with server-side rendering, loading states and context management.' techArray={['NextJS', 'React', 'Typescript']}/>
        <SubSectionTitle title='Technical Skills'/>
        <section className={styles.techSection}>
          <Technology techName='Angular'>
            <AngularIcon width={'103px'} height={'103px'} fill1={'#766045'} fill2={'#8F7B5F'}/>
          </Technology>
          <Technology techName='ReactJS'>
            <ReactIcon width={'103px'} height={'103px'} fill={'#766045'}/>
          </Technology>
          <Technology techName='NextJS'>
            <NextIcon width={'103px'} height={'103px'} fill={'#766045'}/>
          </Technology>
          <Technology techName='Typescript'>
            <TypescriptIcon width={'103px'} height={'103px'} fill={'#766045'} bgColor={'#FAF6F0'}/>
          </Technology>
          <Technology techName='Figma'>
            <FigmaIcon width={'103px'} height={'103px'} fill={'#766045'}/>
          </Technology>
        </section>
      </section>
    </section>
  )
}

export default portfolioTemplate