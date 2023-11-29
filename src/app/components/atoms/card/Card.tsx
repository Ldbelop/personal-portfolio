import styles from './card.module.css'
import CardImg from '../cardImg'
import CardTitle from '../cardTitle'
import TechBullet from '../techBullet'
import CardDescription from '../cardDescription'
import CardIcon from '../cardIcon'
import { AttachmentIcon, GithubIcon } from '../../icons/icons'
import { makeSlug } from '@/app/services/textService'

const Card = ({ title, description, techArray, imgSrc, altTxt, githubHref, deployHref }: { title: string, description: string, techArray: string[], imgSrc: string, altTxt: string, githubHref: string, deployHref: string }) => {
  const techToRender: React.ReactNode = techArray.map((tech:string, index: number): React.ReactNode => {
    return <TechBullet key={`${makeSlug(tech)}${index}`} text={tech}/>
  })

  return (
    <>
      <section className={`${styles.container} ${styles.mobile}`}>
          <CardImg source={imgSrc} altText={altTxt} width={271} height={153}/>
          <CardTitle title={title} />
          <section>
            {techToRender}
          </section>
          <CardDescription text={description} />
          <div className={styles.links}>
            <CardIcon href={githubHref}>
              <GithubIcon width='30px' height='30px' fill='#C9B79E'/>
            </CardIcon>
            <CardIcon href={deployHref}>
              <AttachmentIcon width='30px' height='30px' fill='#C9B79E'/>
            </CardIcon>
          </div>
      </section>
      <section className={`${styles.container} ${styles.landscape}`}>
          <div>
            <div className={styles.landscapeTitleContainer}>
              <CardTitle title={title} />
              <div className={styles.links}>
                <CardIcon href={githubHref}>
                  <GithubIcon width='30px' height='30px' fill='#C9B79E'/>
                </CardIcon>
                <CardIcon href={deployHref}>
                  <AttachmentIcon width='30px' height='30px' fill='#C9B79E'/>
                </CardIcon>
              </div>
            </div>
            <section>
              {techToRender}
            </section>
            <CardDescription text={description} />
          </div>
          <CardImg source={imgSrc} altText={altTxt} width={519} height={293}/>
      </section>
    </>
  )
}

export default Card