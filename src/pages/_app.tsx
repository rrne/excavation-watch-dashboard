import '@src/styles/font.css';
import Script from 'next/script';
import { css, Global } from '@emotion/react';
import {reset} from '@src/styles/global.js'
import '@src/styles/antd.less';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

import Layout from '@src/components/layout/Layout'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <>
     <Global
        styles={css`
          ${reset}
        `}
      />
     <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false&libraries=clusterer`}
        strategy="beforeInteractive"
      />
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </RecoilRoot>
    </QueryClientProvider>
    
    </>
  )
  
  
}

export default MyApp
