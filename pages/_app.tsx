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
            <Navigator />
            <main className={styles.main}>
                <Component {...pageProps} />
            </main>
            <Footer />
            <Script src="https://kit.fontawesome.com/699f63647e.js" crossOrigin="anonymous" />
        </>
    )
}

export default appWithTranslation(MyApp)
