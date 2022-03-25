import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link';


const Home = () => {
  const { t } = useTranslation('common')
  return (
      <>
          <Head>
              <title>{t('common.header.home')}</title>
              <meta name="description" content="{t('common.header.description')}" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.intro}>
              <h1 className={styles.h1}>
                  {t('home.meet_your')}<br />
                  <span>{t('home.one')}</span> {t('home.two')}
              </h1>
          </div>
          <div className={styles.animation}><Link href="/about">➠</Link></div>
      </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale } : any) => {
    return {
        props: {
            ...await serverSideTranslations(
                locale,
                [
                    'common',
                    'navigator',
                    'home'
                ]
            ),
        }
    }
}

export default Home
