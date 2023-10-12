import Image from 'next/image'
import styles from './page.module.css'
import HomeTemplate from '@/app/components/templates/homeTemplate'
import ExperienceTemplate from '@/app/components/templates/experienceTemplate'
import AboutMeTemplate from './components/templates/aboutMeTemplate'

export default function Home() {
  return (
    <>
      <HomeTemplate />
      <ExperienceTemplate />
      <AboutMeTemplate />
    </>
  )
}
