/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import Head from 'next/head';

import Pitch from '../src/components/Pitch';
import Footer from '../src/components/Footer';

const Home = (): React.ReactElement => {
  return (
    <>
      <Head>
        <title>Messaging Consultation</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_CODE"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'GA_TRACKING_CODE');
              `,
          }}
        />
      </Head>
      <Pitch />
      <Footer />
    </>
  );
};

export default Home;
