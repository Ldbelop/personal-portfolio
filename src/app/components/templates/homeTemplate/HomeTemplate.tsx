import React from 'react'
import Header from '@/app/components/molecules/header'
import BannerTitle from '@/app/components/atoms/bannerTitle'
import BannerText from '@/app/components/atoms/bannerText'
import styles from './homeTem.module.css'

const HomeTemplate = () => {
  return (
    <>
      <Header />
      <section className={styles.bannerContainer} id='Home'>
        <BannerTitle />
        <BannerText />
      </section>
    </>
  )
}

export default HomeTemplate