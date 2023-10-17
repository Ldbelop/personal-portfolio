import { poppins } from '@/utils/fonts'
import styles from './technology.module.css'

const Technology = ({ children, techName }: { children: React.ReactNode, techName: string  }) => {
  return (
    <>
      {children}
      <h4 className={`${styles.text} ${poppins.className}`}>{techName}</h4>
    </>
  )
}

export default Technology