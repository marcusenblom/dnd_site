import GlobalHead from 'components/Layout/GlobalHead/GlobalHead'
import Layout from 'components/Layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <GlobalHead />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
