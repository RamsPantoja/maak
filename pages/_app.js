import '../styles/globals.css'
import { SnackbarProvider } from 'notistack';
import { Provider } from 'next-auth/client';
import StoreProvider from '../store/StoreProvider';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import nProgress from 'nprogress';
import '../styles/nprogress.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      nProgress.start();
    }

    const handleStop = () => {
      nProgress.done();
    }

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    }
  }, [router]);

  return (
    <Provider>
      <SnackbarProvider 
      maxSnack={2}>
        <StoreProvider>
          <Component {...pageProps}/>
        </StoreProvider>
      </SnackbarProvider>
    </Provider>
  )
}

export default MyApp
