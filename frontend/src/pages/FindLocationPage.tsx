import { Typography } from "@mui/material"

import Layout from "../components/Layout/Layout"
import { PagesNamesEnum } from "../enums/enums"

const FindLocationPage = () => {
  return (
    <Layout title={PagesNamesEnum.FIND}>
      <Typography>{PagesNamesEnum.FIND}</Typography>
    </Layout>
  )
}

export default FindLocationPage
