import Link from 'next/link'
import styles from '../../styles/components/Header.module.css'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const Header = () => {
    const { asPath } = useRouter()
    const { t } = useTranslation('navigator')
    return (
        <header className={styles.header}>
            <div className={styles.nav}>
                <nav className={styles.navigator}>
                    <ul>
                        <li className={`${styles.navBtn} ${styles.home} ${asPath == '/' ? styles.active : ''}`}><Link href="/">{t('home')}</Link></li>
                        <li className={`${styles.navBtn} ${styles.about} ${asPath == '/about' ? styles.active : ''}`}><Link href="/about">{t('about')}</Link></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.logo}>Rodolfo Thiede B.</div>
            <div className={styles.nav}>
                <nav className={styles.navigator}>
                    <ul>
                        <li className={`${styles.navBtn} ${styles.blog} ${asPath == '/blog' ? styles.active : ''}`}><Link href="/blog">{t('blog')}</Link></li>
                        <li className={`${styles.navBtn} ${styles.contact} ${asPath == '/contact' ? styles.active : ''}`}><Link href="/contact">{t('contact')}</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
