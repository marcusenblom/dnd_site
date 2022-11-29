import GlobalHead from 'components/Layout/GlobalHead/GlobalHead'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <GlobalHead />
    <Component {...pageProps} />
  </>
}

export default MyApp
