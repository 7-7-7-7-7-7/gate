import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import Header from '../components/header/header'
import { useTranslation } from 'next-i18next'
import styles from '../styles/About.module.css'
import { Skills } from '../interfaces/skill'
import { Experiences } from '../interfaces/experience'
import { yearsOld } from '../utils';

const About = () => {
    const { t } = useTranslation('about');
    return (
        <>
            <Header title={t('header.title')} description={t('header.description')} />
            <div className={styles.aboutContainer}>
                <div className={styles.aboutBox}>
                    <div className={styles.aboutText}>{t('about_me_one', {yearsOld: yearsOld()})}</div>
                    <div className={styles.aboutText}>
                        <div className={styles.element}>
                            <div className={styles.photo}></div>
                        </div>
                        <div style={{paddingTop: '35px'}}>{t('about_me_two')}</div>
                    </div>
                    <div style={{paddingTop: '50px'}} className={styles.aboutText}>{t('about_me_three')}</div>
                </div>
                <div className={styles.skillsBox}>
                    <div className={styles.skillsBoxTitle}>{t('skills')}</div>
                    <div className={styles.skillsBoxContainer}>
                        {
                            Skills.map((skill) => (
                                <div key={skill.name} className={styles.skillsCategory}>
                                    <div className={styles.skillsTitle}>{t(skill.name)}</div>
                                    <div className={styles.skillsContainer}>
                                        {skill.values.map((value) => (
                                            <div key={value}  className={styles.skill}>{value}</div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <div className={styles.skillsBoxTitle}>{t('professional_experience')}</div>
                    <div className={styles.experienceBox}>
                        {
                            Experiences.map((experience) => (
                                <div key={experience.company} className={styles.experience}>
                                    <div className={styles.companyName}>{experience.company}</div>
                                    <div className={styles.jobTitle}>{experience.position}</div>
                                    <div className={styles.jobLogo}></div>
                                    <div className={styles.jobDescription}>{t(experience.jobDescription)}</div>
                                    <div className={styles.jobPeriod}>{experience.period}</div>
                                </div>
                            ))
                        }
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
