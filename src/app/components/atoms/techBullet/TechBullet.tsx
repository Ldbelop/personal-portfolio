import { poppins } from '@/utils/fonts'
import styles from './techBullet.module.css'

const TechBullet: React.FunctionComponent<{ text: string }> = ({ text }): React.JSX.Element => {
  return (
    <div className={`${styles.bullet} ${poppins.className}`}>{text}</div>
  )
}

export default TechBullet