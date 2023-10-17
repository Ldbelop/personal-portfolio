import styles from './card.module.css'
import CardImg from '../cardImg'
import CardTitle from '../cardTitle'
import TechBullet from '../techBullet'
import CardDescription from '../cardDescription'
import CardIcon from '../cardIcon'
import { AttachmentIcon, GithubIcon } from '../../icons/icons'

const Card = ({ title }: { title: string}) => {
  return (
    <>
      <section className={`${styles.container} ${styles.mobile}`}>
          <CardImg source={'/Book-it.jpg'} altText={'Aphex Img'} width={271} height={153}/>
          <CardTitle title={title} />
          <section>
            <TechBullet text='React'/>
            <TechBullet text='Typescript'/>
          </section>
          <CardDescription text='Lorem ipsum dolor amet set the land is inhospitable and so we are, smaller text, lorem apsum dolor asemota sre sldkjfe kashiri goda'/>
          <div className={styles.links}>
            <CardIcon href='https://github.com/Ldbelop/hotels-nextjs'>
              <GithubIcon width='30px' height='30px' fill='#C9B79E'/>
            </CardIcon>
            <CardIcon href='https://hotels-nextjs.vercel.app/'>
              <AttachmentIcon width='30px' height='30px' fill='#C9B79E'/>
            </CardIcon>
          </div>
      </section>
      <section className={`${styles.container} ${styles.landscape}`}>
          <div>
            <div className={styles.landscapeTitleContainer}>
              <CardTitle title={title} />
              <div className={styles.links}>
                <CardIcon href='https://github.com/Ldbelop/hotels-nextjs'>
                  <GithubIcon width='30px' height='30px' fill='#C9B79E'/>
                </CardIcon>
                <CardIcon href='https://hotels-nextjs.vercel.app/'>
                  <AttachmentIcon width='30px' height='30px' fill='#C9B79E'/>
                </CardIcon>
              </div>
            </div>
            <section>
              <TechBullet text='React'/>
              <TechBullet text='Typescript'/>
            </section>
            <CardDescription text='Lorem ipsum dolor amet set the land is inhospitable and so we are, smaller text, lorem apsum dolor asemota sre sldkjfe kashiri goda'/>
          </div>
          <CardImg source={'/Book-it.jpg'} altText={'Aphex Img'} width={519} height={293}/>
      </section>
    </>
  )
}

export default Card