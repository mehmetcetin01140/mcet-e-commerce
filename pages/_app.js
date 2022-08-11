import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../layout/Layout';
import AuthContextProvider from '../contexts/AuthContext'
import CartContextProvider from '../contexts/CartContext';
function MyApp({ Component, pageProps }) {
  return(
    <AuthContextProvider>
  <CartContextProvider>
    <Layout>

      <Component {...pageProps} />
    </Layout>
    </CartContextProvider>
    </AuthContextProvider>
  ) 
}

export default MyApp
