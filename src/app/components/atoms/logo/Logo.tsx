import Image from 'next/image'
import styles from './logo.module.css'

const Logo = () => {
  return (
    <Image
      src="/db-logo.png"
      width={37}
      height={37}
      alt="David Baron's Brand Logo"
    />
  )
}

export default Logo