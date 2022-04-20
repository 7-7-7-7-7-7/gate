import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Header from '../components/header/header'
import styles from '../styles/Contact.module.css'

const Contact = () => {
    const { t } = useTranslation('contact')
    const contactMail = 'rodolfo@thie.dev'
    return (
        <>
            <Header title={t('header.title')} description={t('header.description')} />
            <div className={styles.intro}>
                <h1 className={styles.h1}>{t('lets_talk')}</h1>
                <h2 className={styles.h2}>{t('contact_text')} <span><a href={`mailto:${contactMail}`}>{contactMail}</a></span>.</h2>
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
                    'contact',
                    'navigator'
                ]
            ),
        }
    }
}

export default Contact
