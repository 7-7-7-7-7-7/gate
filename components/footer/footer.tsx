import Link from 'next/link'
import styles from '../../styles/components/Footer.module.css'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const Footer = () => {
    const { i18n } = useTranslation('common')
    const year = new Date().getFullYear()
    const router = useRouter()
    const currentLanguage = i18n.language

    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}>
                © {year} | <span className={styles.heart}><i className="fa-solid fa-heart" title="Made with love."></i></span> | <Link href={router.asPath} locale={currentLanguage === 'es' ? 'en' : 'es'}><span className={styles.language}><i
                className="fa-solid fa-globe"></i> {currentLanguage}</span></Link>
            </div>
            <div className={styles.links}>
                <a href="https://gitlab.com/ssspells" target="_blank" rel="noreferrer noopener"><i className={`${styles.gitlab} fa-brands fa-gitlab`}></i></a>
                <a href="https://github.com/7-7-7-7-7-7" target="_blank" rel="noreferrer noopener"><i className={`${styles.github} fa-brands fa-github`}></i></a>
                <a href="https://www.linkedin.com/in/rodolfo-thiede/" target="_blank" rel="noreferrer noopener"><i className={`${styles.linkedIn} fa-brands fa-linkedin`}></i></a>
            </div>
        </footer>
    )
}

export default Footer
