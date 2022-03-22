import Link from 'next/link'
import styles from '../../styles/components/Header.module.css'
import { useRouter } from 'next/router'

function Header () {
    const { asPath } = useRouter()
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Rodolfo Thiede B.</div>
            <div className={styles.nav}>
                <nav className={styles.navigator}>
                    <ul>
                        <li className={`${styles.navBtn} ${styles.home} ${asPath == '/' ? styles.active : ''}`}><Link href="/">Inicio</Link></li>
                        <li className={`${styles.navBtn} ${styles.about} ${asPath == '/about' ? styles.active : ''}`}><Link href="/about">Sobre mí</Link></li>
                        <li className={`${styles.navBtn} ${styles.blog} ${asPath == '/blog' ? styles.active : ''}`}><Link href="/blog">Blog</Link></li>
                        <li className={`${styles.navBtn} ${styles.contact} ${asPath == '/contact' ? styles.active : ''}`}><Link href="/contact">Contacto</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
