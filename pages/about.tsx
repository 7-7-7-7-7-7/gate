import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

const About = () => {
    return 'About'
}

export const getStaticProps: GetStaticProps = async ({ locale } : any) => {
    return {
        props: {
            ...await serverSideTranslations(
                locale,
                [
                    'common',
                    'navigator'
                ]
            ),
        }
    }
}

export default About
