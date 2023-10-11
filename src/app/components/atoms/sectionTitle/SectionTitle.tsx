import styles from './sectionTitle.module.css'
import { calistoga } from '@/utils/fonts'

const SectionTitle = ({ titleText }: { titleText: string }) => {
  return (
    <h3 className={`${calistoga.className} ${styles.title}`}>
        {titleText}
    </h3>
  )
}

export default SectionTitle