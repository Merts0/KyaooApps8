import { useParams, Link } from 'react-router-dom'
import { getById } from '../data/catalog.js'
import PageTransition from '../components/PageTransition.jsx'

function Policy() {
  const { id } = useParams()
  const item = getById(id)
  if (!item) {
    return (
      <PageTransition>
        <div className="container">
          <h2>Not found</h2>
          <p>No policy available.</p>
        </div>
      </PageTransition>
    )
  }
  return (
    <PageTransition>
      <div className="container">
        <h2>{item.title} — Policy</h2>
        <div style={{ marginTop: '0.75rem', color: 'var(--muted)', whiteSpace: 'pre-wrap' }}>
          {item.policy}
        </div>
        <div className="actions" style={{ marginTop: '1rem' }}>
          <Link to={`/apps/${item.id}`} className="btn">Details</Link>
          <Link to={item.kind === 'game' ? '/games' : '/applications'} className="btn">Back</Link>
        </div>
      </div>
    </PageTransition>
  )
}

export default Policy
