import '../styles/globals.css'
import AOS from "aos";
import { Layout } from '../components/Layout'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react';
import "aos/dist/aos.css";
import { Provider } from 'react-redux';
import store from '../app/store';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>


  )
}
