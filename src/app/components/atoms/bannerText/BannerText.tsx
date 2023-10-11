import styles from './bannerText.module.css'
import { inter } from '@/utils/fonts'

const BannerText = () => {
  return (
    <p className={`${styles.bannerText} ${inter.className}`}>
      I’m a <span>front-end developer</span> wanting to make creative experiences and pushing boundaries forward.
    </p>
  )
}

export default BannerText