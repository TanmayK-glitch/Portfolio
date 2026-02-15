import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import DesignsPage from './pages/DesignsPage'
import PageTransition from './components/PageTransition'

import { Analytics } from "@vercel/analytics/react"

function App() {
  const location = useLocation()

  return (
    <>
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/designs" element={<DesignsPage />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
      <Analytics />
    </>
  )
}

export default App