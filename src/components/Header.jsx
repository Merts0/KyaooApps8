import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <span className="brand-badge"></span>
          <span>KyaooApps</span>
        </Link>
        <nav className="nav desktop">
          <NavLink to="/games" className={({ isActive }) => isActive ? 'active' : ''}>Games</NavLink>
          <a href="https://store.steampowered.com/app/3799920/AshBall" target="_blank" rel="noreferrer">AshBall</a>
        </nav>
        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen(true)}>
          <span></span>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <Motion.div className="sheet" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <Motion.div className="drawer" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} transition={{ duration: 0.25 }}>
              <div className="drawer-header">
                <Link to="/" className="brand" onClick={() => setOpen(false)}>
                  <span className="brand-badge"></span>
                  <span>KyaooApps</span>
                </Link>
                <button className="nav-close" aria-label="Close" onClick={() => setOpen(false)}>
                  <span></span>
                </button>
              </div>
              <div className="drawer-links">
                <NavLink to="/games" onClick={() => setOpen(false)}>Games</NavLink>
                <a href="https://store.steampowered.com/app/3799920/AshBall" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>AshBall</a>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
