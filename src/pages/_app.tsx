import { type AppType } from "next/dist/shared/lib/utils";
import { Roboto_Flex, Caveat } from '@next/font/google';

import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const robotoFlex = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto'});
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' });

const MyApp: AppType = ({ Component, pageProps }) => {
  
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${robotoFlex.variable} ${caveat.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
};

export default MyApp;
