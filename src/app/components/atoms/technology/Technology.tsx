import { poppins } from '@/utils/fonts'
import styles from './technology.module.css'

const Technology = ({ children, techName }: { children: React.ReactNode, techName: string  }) => {
  return (
    <div className={styles.container}>
      {children}
      <h4 className={`${styles.text} ${poppins.className}`}>{techName}</h4>
    </div>
  )
}

export default Technology