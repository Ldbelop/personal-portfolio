import Logo from "@/app/components/atoms/logo"
import HamMenu from "@/app/components/atoms/hamMenu"
import NavBar from "@/app/components/molecules/navBar"
import styles from './header.module.css'
import LinkIcon from "@/app/components/atoms/linkIcon/LinkIcon"
import { SunIcon, TranslateIcon } from '@/app/components/icons/icons'

const Header = () => {
    const toggleLightMode = (): void => {
        console.log("toggled!")
    }

    return (
        <header className={styles.header}>
            <Logo />
            <NavBar />
            <HamMenu />
            <section className={styles.iconContainer}>
                <button className={styles.linkIcon}>
                    {/* I need to add the clickHandlers */}
                    <SunIcon />
                </button>
                <button className={styles.linkIcon}>
                    {/* I need to add the clickHandlers */}
                    <TranslateIcon />
                </button>
            </section>
        </header>
    )
}

export default Header