import { Link } from 'react-router-dom'

function Card({ item }) {
  return (
    <div className="card">
      <h3>{item.title}</h3>
      <p>{item.summary}</p>
      <div className="actions">
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
