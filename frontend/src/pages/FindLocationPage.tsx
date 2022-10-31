import BottomContainer from '../components/Common/BottomContainer'
import UpperContainer from '../components/Common/UpperContainer'
import Layout from '../components/Layout/Layout'
import { PagesNamesEnum } from '../enums/enums'

const FindLocationPage = () => {
  return (
    <Layout title={PagesNamesEnum.FIND}>
      <UpperContainer pageName={PagesNamesEnum.FIND} />
      <BottomContainer pageName={PagesNamesEnum.FIND} />
    </Layout>
  )
}

export default FindLocationPage
