import Link from 'next/link'
import { inter } from '@/utils/fonts'
import styles from './headerLink.module.css'

const HeaderLink = ({ section }: { section: string }) => {
  return (
    <Link href={`/#${section}`} className={`${inter.className} ${styles.link}`} scroll={false}>
      {section}
    </Link>
  )
}

export default HeaderLink