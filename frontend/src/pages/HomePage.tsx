import Layout from '../components/Layout/Layout'
import { PagesNamesEnum } from '../enums/enums'
import UpperContainer from '../components/Common/UpperContainer'
import BottomContainer from '../components/Common/BottomContainer'

const HomePage = () => {
  return (
    <Layout title={PagesNamesEnum.CURRENT}>
      <UpperContainer pageName={PagesNamesEnum.CURRENT}/>
      <BottomContainer pageName={PagesNamesEnum.CURRENT}/>
    </Layout>
  )
}

export default HomePage
