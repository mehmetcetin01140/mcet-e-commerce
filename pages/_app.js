import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../layout/Layout';
import AuthContextProvider from '../contexts/AuthContext'
function MyApp({ Component, pageProps }) {
  return(
<AuthContextProvider>
    <Layout>

      <Component {...pageProps} />
    </Layout>
    </AuthContextProvider>
  ) 
}

export default MyApp
