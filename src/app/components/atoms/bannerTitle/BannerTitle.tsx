import styles from './bannerTitle.module.css'
import { calistoga } from '@/utils/fonts'

const BannerTitle = () => {
  return (
    <h1 className={`${styles.bannerTitle} ${calistoga.className}`}>
      Hello! I&apos;m David
    </h1>
  )
}

export default BannerTitle