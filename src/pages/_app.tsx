import '@src/styles/globals.css';
import 'antd/dist/antd.css';
import '@src/styles/font.css'

import Layout from '@src/components/layout/Layout'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  
  
}

export default MyApp
