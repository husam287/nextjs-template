import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import 'antd/dist/antd.css';
import '../styles/globals.scss'
import { ImportantVars } from '../constants/ImportantVars'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{ImportantVars.websiteName}</title>
        <meta name="description" content={ImportantVars.websiteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
