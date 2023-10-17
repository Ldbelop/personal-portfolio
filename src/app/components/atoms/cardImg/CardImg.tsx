import Image from 'next/image'
import styles from './cardImg.module.css'

const CardImg = ({ source, altText, width, height }: { source: string, altText: string, width: number, height: number }) => {
  return (
    <Image className={styles.img} src={source} alt={altText} width={width} height={height}/>
  )
}

export default CardImg