import { FC } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Date from '@components/date'
import Layout from '@components/layout'
import { getSortedPostsData } from '@utils/posts'
import SITE_TITLE from '@constants/constants'
import { PostsDataType } from '@customTypes/posts'

import utilStyles from '@styles/utils.module.css'

const getStaticProps: GetStaticProps = () => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    },
  }
}
interface Props {
  allPostsData: PostsDataType
}

const Home: FC<Props> = ({ allPostsData }) => {
  return (
    <Layout isHome>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.centerVertical}`}>
        <p>React Native Developer experimenting on web tech again</p>
        <Image
          alt={'HERE I COME!'}
          height={500}
          src="/images/hereicome.jpg"
          width={400}
          priority
        />
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className={utilStyles.listItem}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export { Home as default, getStaticProps }
