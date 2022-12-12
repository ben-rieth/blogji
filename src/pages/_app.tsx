import { type AppType } from "next/dist/shared/lib/utils";
import { Roboto_Flex } from '@next/font/google';

import "../styles/globals.css";

const robotoFlex = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto'});

const MyApp: AppType = ({ Component, pageProps }) => {
  
  return (
    <div className={`${robotoFlex.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
