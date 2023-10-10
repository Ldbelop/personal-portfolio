import Logo from "@/app/components/atoms/logo"
import HamMenu from "@/app/components/atoms/hamMenu"
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <HamMenu />
        </header>
    )
}

export default Header