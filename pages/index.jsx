import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ScreenWrapper from 'components/General/ScreenWrapper';
import Text from 'components/General/Text';
import styles from 'styles/Home.module.scss';
import FONT_FAMILY from 'constants/FontFamily';
import { Container } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  return (
    <ScreenWrapper>
      <Container>
        <Text variant="h1">hossam sherif</Text>
        <Text className={styles['text-test']} fontFamily={FONT_FAMILY.bold}>
          test
        </Text>
        <div className={styles.imageStyle}>
          <Image
            src="https://picsum.photos/200/300"
            layout="fill"
            objectFit="contain"
            loading="lazy"
            alt="sss"
          />
        </div>
      </Container>
    </ScreenWrapper>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
