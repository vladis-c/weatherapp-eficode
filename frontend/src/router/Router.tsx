import { Routes, Route } from 'react-router-dom'

import FindLocationPage from '../pages/FindLocationPage'
import HomePage from '../pages/HomePage'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/find" element={<FindLocationPage />} />
    </Routes>
  )
}

export default Router
