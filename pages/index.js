import { Container } from '@mui/system'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react'
import { ProductServices } from 'apis/Services/ProductService'
import ScreenWrapper from 'components/General/ScreenWrapper'
import Text from 'components/General/Text'
import HandleErrors from 'hooks/handleErrors'
import styles from 'styles/Home.module.scss'

export default function Home() {
  useEffect(() => {
    ProductServices.getCategories()
      .then(res => {
        console.log(res)
      })
      .catch(err => HandleErrors(err))
  }, [])

  return (
    <ScreenWrapper>
      <Container>
        <Text variant='h1'>hossam sherif</Text>
        <Text>test</Text>
      </Container>
    </ScreenWrapper>
  )
}

export const getServerSideProps = async ({ locale }) => {

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}