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
            <div className={styles.aboutContainer}>
                <div className={styles.gradient}></div>
                <div className={styles.aboutBox}>
                    <div className={styles.boxAbout}>
                        <div className={styles.element}>
                            <div className={styles.photo}></div>
                        </div>
                        My name is Rodolfo and I live in Santiago, Chile. I'm 26 years old and I'm a developer. I am mainly dedicated to the development of web platforms, in which I use the latest technologies currently in use. My mission as a professional is to create quality applications that are totally useful and elegant. I know that computing is mutating day by day and that's why I manage myself to be in constant learning.<br /><br />
                        Since I was a child I had contact with the world of electronics and computing, having been born in an era where technology was in full growth. I learned to program at 16 years old out of curiosity and a couple of years later, I decided to study and make this my profession, so I entered in 2017 to study the career of Programmer analyst at INACAP, from which I graduated in 2019.
                        Not everything in life is a profession, so I will tell you a little more about me: I like TV series, winter, photography, reading about science, technology, sociology, psychology... I enjoy music and its different genres. I don't exercise as much as I would like to, but I'm already working on that ;) For me animals are not food, nor are they clothes, nor ingredients of industrial products. I like to believe that little by little we are advancing as humanity towards a world free of cruelty to animals, but there is still a lot to do.
                    </div>
                </div>
            </div>
            <div className={styles.mobileAbout}>
                <div className={styles.photo}></div>
                <div className={styles.aboutMobileBox}>
                    {t('lorem')}
                </div>
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
