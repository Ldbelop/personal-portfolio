import SectionTitle from '@/app/components/atoms/sectionTitle/SectionTitle'
import styles from './aboutMeTemplate.module.css'
import JobDescription from '@/app/components/atoms/jobDescription/JobDescription'
import AboutImage from '@/app/components/atoms/aboutImage/AboutImage'

const AboutMeTemplate = () => {
    return (
        <section className={styles.container}>
            <SectionTitle titleText={'About me'}/>
            <JobDescription descText='Nothing is built alone, improve with others'/>
            <AboutImage />
            <JobDescription descText='I look forward to be a high impact developer, but meanwhile I focus on teaching, learning and improving my skills & habits.'/>
            <JobDescription descText='My name is David Barón, I am a 18 year old Front-end developer, but im also a compulsive builder, from legos to web apps, I love building things!'/>
        </section>
    )
}

export default AboutMeTemplate