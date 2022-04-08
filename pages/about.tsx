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
                <div className={styles.aboutBox}>
                    <div className={styles.aboutText}>{t('about_me_one')}</div>
                    <div className={styles.aboutText}>
                        <div className={styles.element}>
                            <div className={styles.photo}></div>
                        </div>
                        <div>{t('about_me_two')} {t('about_me_three')}</div>
                    </div>
                </div>
                <div className={styles.skillsBox}>
                    <div className={styles.skillsBoxTitle}>Habilidades</div>
                    <div className={styles.skillsBoxContainer}>
                        <div className={styles.skillsCategory}>
                            <div className={styles.skillsTitle}>Lenguajes de programación</div>
                            <div className={styles.skillsContainer}>
                                <div className={styles.skill}>JavaScript</div>
                                <div className={styles.skill}>Go</div>
                                <div className={styles.skill}>PHP</div>
                                <div className={styles.skill}>Java</div>
                                <div className={styles.skill}>Ruby</div>
                                <div className={styles.skill}>Swift</div>
                            </div>
                        </div>
                        <div className={styles.skillsCategory}>
                            <div className={styles.skillsTitle}>Sistemas operativos</div>
                            <div className={styles.skillsContainer}>
                                <div className={styles.skill}>WinServer 2012</div>
                                <div className={styles.skill}>Ubuntu 18.04</div>
                                <div className={styles.skill}>CentOS</div>
                            </div>
                        </div>
                        <div className={styles.skillsCategory}>
                            <div className={styles.skillsTitle}>Tecnologías web</div>
                            <div className={styles.skillsContainer}>
                                <div className={styles.skill}>React.js</div>
                                <div className={styles.skill}>Angular</div>
                                <div className={styles.skill}>CSS</div>
                                <div className={styles.skill}>HTML 5</div>
                                <div className={styles.skill}>Rails</div>
                                <div className={styles.skill}>jQuery</div>
                            </div>
                        </div>
                        <div className={styles.skillsCategory}>
                            <div className={styles.skillsTitle}>Bases de Datos</div>
                            <div className={styles.skillsContainer}>
                                <div className={styles.skill}>MongoDB</div>
                                <div className={styles.skill}>Postgres</div>
                                <div className={styles.skill}>MariaDB</div>
                                <div className={styles.skill}>Cosmos</div>
                                <div className={styles.skill}>SQL</div>
                                <div className={styles.skill}>MySQL</div>
                            </div>
                        </div>
                        <div className={styles.skillsCategory}>
                            <div className={styles.skillsTitle}>Infraestructura <em>cloud</em></div>
                            <div className={styles.skillsContainer}>
                                <div className={styles.skill}>Azure</div>
                                <div className={styles.skill}>Google Cloud</div>
                                <div className={styles.skill}>DigitalOcean</div>
                                <div className={styles.skill}>Heroku</div>
                            </div>
                        </div>

                        <div className={styles.skillsCategory}>
                            <div className={styles.skillsTitle}>Otros</div>
                            <div className={styles.skillsContainer}>
                                <div className={styles.skill}>Git</div>
                                <div className={styles.skill}>Docker</div>
                                <div className={styles.skill}>Kubernetes</div>
                                <div className={styles.skill}>Kafka</div>
                                <div className={styles.skill}>REST</div>
                                <div className={styles.skill}>GraphQL</div>
                                <div className={styles.skill}>Redux</div>
                                <div className={styles.skill}>WebExtensions</div>
                            </div>
                        </div>
                    </div>
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
