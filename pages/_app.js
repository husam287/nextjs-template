import 'bootstrap/dist/css/bootstrap.css'
import 'antd/dist/antd.css';
import '../styles/globals.scss'
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import MainLayout from '../components/General/MainLayout';
import { theme } from "../styles/theme";
import { store } from '../redux';
import createEmotionCache from "../hooks/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }) {
  const emotionCache = clientSideEmotionCache;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
