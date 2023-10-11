import HeaderLink from '@/app/components/atoms/headerLink'
import styles from './navBar.module.css'
import { makeSlug } from '@/app/services/textService'

const NavBar = () => {

    const sectionList : string[] = ['Home' , 'Experience', 'About me', 'Portfolio', 'Education', 'Contact']
    const linkList: JSX.Element[] = sectionList.map((section: string, index: number): JSX.Element => {
        return <HeaderLink section={section} key={`${index}${makeSlug(section)}`}/>
    })
    return (
        <nav className={styles.navBar}>
            {linkList}
        </nav>
    )
}

export default NavBar