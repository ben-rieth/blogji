import { type AppType } from "next/dist/shared/lib/utils";
import { Roboto_Flex, Caveat } from '@next/font/google';

import "../styles/globals.css";

const robotoFlex = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto'});
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' });

const MyApp: AppType = ({ Component, pageProps }) => {
  
  return (
    <div className={`${robotoFlex.variable} ${caveat.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
