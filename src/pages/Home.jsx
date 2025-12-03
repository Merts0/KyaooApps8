import { Link } from 'react-router-dom'
import Card from '../components/Card.jsx'
import { getByKind } from '../data/catalog.js'
import PageTransition from '../components/PageTransition.jsx'

function Home() {
  const games = getByKind('game')
  const apps = getByKind('application')
  return (
    <PageTransition>
      <section className="hero">
        <div className="container">
          <div className="brand-mark">KyaooApps</div>
          <h1>Build. Play. Experience.</h1>
          <p>KyaooApps curates modern games and applications with clear policies.</p>
          <div className="btn-group" style={{ justifyContent: 'center', marginTop: '1rem' }}>
            <Link to="#games" className="btn primary">Explore Games</Link>
            <Link to="#applications" className="btn">Explore Applications</Link>
          </div>
        </div>
      </section>

      <section id="games" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Games</h2>
            <Link to="/games" className="btn">View all</Link>
          </div>
          <div className="grid" style={{ marginTop: '1rem' }}>
            {games.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="applications" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Applications</h2>
            <Link to="/applications" className="btn">View all</Link>
          </div>
          <div className="grid" style={{ marginTop: '1rem' }}>
            {apps.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Home
