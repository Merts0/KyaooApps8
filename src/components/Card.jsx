import { Link } from 'react-router-dom'

function Card({ item }) {
  return (
    <div className="card card-pro">
      <div className="card-head">
        <div className="card-icon" aria-hidden="true"></div>
        <div className="card-meta">
          <span className={item.kind === 'game' ? 'badge game' : 'badge app'}>
            {item.kind === 'game' ? 'Game' : 'Application'}
          </span>
        </div>
      </div>
      <h3 className="card-title">{item.title}</h3>
      <p className="card-summary">{item.summary}</p>
      <div className="card-actions">
        {item.website && (
          <a href={item.website} target="_blank" rel="noreferrer" className="btn">Website</a>
        )}
        {item.kind === 'application' && (
          <Link to={`/apps/${item.id}/policy`} className="btn">Policy</Link>
        )}
        <Link to={`/apps/${item.id}`} className="btn primary">Details</Link>
      </div>
    </div>
  )
}

export default Card
