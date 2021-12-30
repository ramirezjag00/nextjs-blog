import { FC, ReactNode } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import SITE_TITLE from '@constants/constants'

import utilStyles from '@styles/utils.module.css'
import styles from '@components/layout.module.css'

const NAME = 'Andrey'

interface Props {
  children: ReactNode
  isHome?: boolean
}

const Layout: FC<Props> = ({ children, isHome }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link href="/favicon.ico" rel="icon" />
        <meta
          content="Learn how to build a personal website using Next.js"
          name="description"
        />
        <meta
          content={`https://og-image.vercel.app/${encodeURI(
            SITE_TITLE,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          property="og:image"
        />
        <meta content={SITE_TITLE} name="og:title" />
        <meta content="summary_large_image" name="twitter:card" />
      </Head>
      <header className={styles.header}>
        {isHome ? (
          <>
            <Image
              alt={NAME}
              className={utilStyles.borderCircle}
              height={144}
              src="/images/profile.jpg"
              width={144}
              priority
            />
            <h1 className={utilStyles.heading2Xl}>{NAME}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  alt={NAME}
                  className={utilStyles.borderCircle}
                  height={108}
                  src="/images/profile.jpg"
                  width={108}
                  priority
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{NAME}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!isHome && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Layout
