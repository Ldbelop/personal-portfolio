import Image from 'next/image'
import styles from './aboutImage.module.css'

const AboutImage = () => {
    return (
        <Image className={styles.image} src={'/my_pfp-pic.jpg'} alt="David Baron's Profile Picture" width='245' height='245' />
    )
}

export default AboutImage