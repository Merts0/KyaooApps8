import { NavLink, Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <span className="brand-badge"></span>
          <span>KyaooApps</span>
        </Link>
        <nav className="nav">
          <NavLink to="/games" className={({ isActive }) => isActive ? 'active' : ''}>Games</NavLink>
          <a href="https://store.steampowered.com/app/3799920/AshBall" target="_blank" rel="noreferrer">AshBall</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
