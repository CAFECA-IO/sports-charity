import Link from 'next/link'
import { useRouter } from 'next/router'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Sample from '../components/sample/sample'

type Props = {
  // Add custom props here
}

const Home = () => {
  const sampleList = new Array(3).fill(0).map(() => {
    return (<Sample></Sample>)
  })
  const router = useRouter()
  const { t } = useTranslation('common')
  const changeTo = router.locale === 'zh' ? 'en' : 'zh'

  return (
    <div className={styles.container}>
      <Head>
        <title>SportsTW</title>
        <meta name="description" content="Sports Public Welfare Platform" />
        <link rel="icon" href="/favicon.ico" />
        <Link href="/" locale={changeTo}>
          <button>{t('change-locale', { changeTo })}</button>
        </Link>
      </Head>

      <main className={styles.main}>
        {sampleList}
        <h1 className={styles.title}>
          {t('greeting')} to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://cafeca.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/cafeca.svg" alt="CAFECA Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common',
      'footer',
    ])),
  },
})

export default Home