import Link from 'next/link'
import { inter } from '@/utils/fonts'
import styles from './headerLink.module.css'
import { makeSlug } from '@/app/services/textService'

const HeaderLink = ({ section }: { section: string }) => {
  return (
    <Link href={`/#${makeSlug(section)}`} className={`${inter.className} ${styles.link}`}>
      {section}
    </Link>
  )
}

export default HeaderLink