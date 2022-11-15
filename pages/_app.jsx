import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';
import 'styles/globals.scss';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import MainLayout from 'components/General/MainLayout';
import theme from 'styles/theme';
import loginHandler from 'hooks/loginHandler';
import { useRouter } from 'next/router';
import { useEffect, useCallback } from 'react';
import { appWithTranslation } from 'next-i18next';
import store from '../reducers';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const autoLogin = useCallback(() => {
    const token = localStorage.getItem('token');
    loginHandler(token);
  }, []);

  const langAdjustment = useCallback(() => {
    localStorage.setItem('lang', router.locale);

    const isArabicLang = router.locale === 'ar';
    const dir = isArabicLang ? 'rtl' : 'ltr';

    document.body.setAttribute('dir', dir);
    if (document.getElementsByTagName('nav').length) {
      document.querySelector('nav').setAttribute('dir', dir);
    }
  }, [router]);

  useEffect(() => {
    autoLogin();
    langAdjustment();
  }, [langAdjustment, autoLogin]);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
