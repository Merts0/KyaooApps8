import { useParams, Link } from 'react-router-dom'
import { getById } from '../data/catalog.js'
import PageTransition from '../components/PageTransition.jsx'

function AppDetails() {
  const { id } = useParams()
  const item = getById(id)
  if (!item) {
    return (
      <PageTransition>
        <div className="container">
          <h2>Not found</h2>
          <p>No app or game matches this id.</p>
        </div>
      </PageTransition>
    )
  }
  return (
    <PageTransition>
      <div className="container">
        <h2>{item.title}</h2>
        <p>{item.summary}</p>
        <div className="actions" style={{ marginTop: '1rem' }}>
          {item.website && (
            <a href={item.website} target="_blank" rel="noreferrer" className="btn primary">Website</a>
          )}
          {item.kind === 'application' && (
            <Link to={`/apps/${item.id}/policy`} className="btn">Policy</Link>
          )}
          <Link to={item.kind === 'game' ? '/games' : '/applications'} className="btn">Back</Link>
        </div>
      </div>
    </PageTransition>
  )
}

export default AppDetails
