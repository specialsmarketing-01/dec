import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css'
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import '../styles/sass/style.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head';
import { LanguageProvider } from '../context/LanguageContext';

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <div>
        <Head>
          <title>DECNOX - Digital Marketing Agency | SEO, Social Media & Google Ads</title>
          <meta name="description" content="DECNOX delivers data-driven digital marketing: SEO, Google Ads, social media, and web design. Grow traffic, leads, and ROI. Get a free strategy call." />
        </Head>
        <Component {...pageProps} />
      </div>
    </LanguageProvider>
  )
}

export default MyApp
