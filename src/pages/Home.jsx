import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'

function Home() {
  return (
    <PageTransition>
      <section className="hero">
        <div className="container">
          <div className="brand-mark">KyaooApps</div>
          <h1>Build. Play. Experience.</h1>
          <p>KyaooApps curates modern games and applications with clear policies.</p>
          <div className="actions" style={{ justifyContent: 'center', marginTop: '1rem' }}>
            <Link to="/games" className="btn primary">Explore Games</Link>
            <a href="https://store.steampowered.com/app/3799920/AshBall" target="_blank" rel="noreferrer" className="btn">Visit AshBall</a>
            <Link to="/apps/lunire" className="btn">View Lunire</Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Home
