import styles from './cardIcon.module.css'

const CardIcon = ({ children, href }: { children: React.ReactNode, href: string }) => {
  return (
    <a href={href} target='_blank'>
        {children}
    </a>
  )
}

export default CardIcon