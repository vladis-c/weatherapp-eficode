import Layout from '../components/Layout/Layout'
import { PagesNamesEnum } from '../enums/enums'
import UpperContainer from '../components/Home/UpperContainer'
import BottomContainer from '../components/Home/BottomContainer'

const HomePage = () => {
  return (
    <Layout title={PagesNamesEnum.CURRENT}>
      <UpperContainer />
      <BottomContainer />
    </Layout>
  )
}

export default HomePage
