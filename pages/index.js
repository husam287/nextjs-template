import { Container } from "@mui/system";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ScreenWrapper from "components/General/ScreenWrapper";
import Text from "components/General/Text";
import styles from "styles/Home.module.scss";

export default function Home() {
  return (
    <ScreenWrapper>
      <Container>
        <Text variant="h1">hossam sherif & mahmoud salah</Text>
        <Text className={styles["text-test"]} fontFamily="black">
          test
        </Text>
      </Container>
    </ScreenWrapper>
  );
}

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
