import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import nProgress from 'nprogress';
import StoreProvider from '../store/StoreProvider';
import '../styles/nprogress.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'light')
    }
  }, []);

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
    <StoreProvider>
      <Component {...pageProps}/>
    </StoreProvider>
  )
}

export default MyApp
