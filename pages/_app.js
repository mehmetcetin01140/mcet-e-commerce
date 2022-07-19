import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../layout/Layout';
function MyApp({ Component, pageProps }) {
  return(
    <Layout>

<Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp
