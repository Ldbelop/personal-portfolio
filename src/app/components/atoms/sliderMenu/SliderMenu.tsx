import { makeSlug } from '@/app/services/textService'
import styles from './sliderMenu.module.css'

const SliderMenu = ({ contentList }: { contentList: any}) => {
  const contentToShow: JSX.Element = contentList.map((title: any, index: number): JSX.Element => {
    return <li className="glide__slide" key={`${makeSlug(title)}${index}`}>{title}</li>
  })

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {contentToShow}
        </ul>
      </div>
    </div>
  )
}

export default SliderMenu