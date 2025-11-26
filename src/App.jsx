import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Games from './pages/Games.jsx'
import Applications from './pages/Applications.jsx'
import AppDetails from './pages/AppDetails.jsx'
import Policy from './pages/Policy.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  const location = useLocation()
  return (
    <div className="app">
      <Header />
      <main className="content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/apps/:id" element={<AppDetails />} />
            <Route path="/apps/:id/policy" element={<Policy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
