import '../styles/globals.css'
import styles from '../styles/common/Main.module.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import Navigator from '../components/navigator/navigator'
import Footer from '../components/footer/footer'
import Script from 'next/script'


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <div className={styles.layout}>
                <Navigator />
                <main className={styles.main}>
                    <Component {...pageProps} />
                </main>
                <Footer />
            </div>
            <Script src="https://kit.fontawesome.com/e203f7df3c.js" crossOrigin="anonymous" />
        </>
    )
}

export default appWithTranslation(MyApp)
