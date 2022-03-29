import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import Header from '../components/header/header'
import { useTranslation } from 'next-i18next'
import styles from '../styles/About.module.css'

const About = () => {
    const { t } = useTranslation('about')
    return (
        <>
            <Header title={t('header.title')} description={t('header.description')} />
            <div className={styles.aboutBox}>
                <div className={styles.aboutText}>{t('about_me_one')}</div>
                <div className={styles.aboutText}>
                    <div className={styles.element}>
                        <div className={styles.photo}></div>
                    </div>
                    <div>{t('about_me_two')}</div>
                </div>
                <div className={styles.aboutText}>{t('about_me_three')}</div>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale } : any) => {
    return {
        props: {
            ...await serverSideTranslations(
                locale,
                [
                    'about',
                    'navigator'
                ]
            ),
        }
    }
}

export default About
