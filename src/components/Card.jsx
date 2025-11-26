import { Link } from 'react-router-dom'

function Card({ item }) {
  return (
    <div className="card">
      <h3>{item.title}</h3>
      <p>{item.summary}</p>
      <div className="actions">
        <Link to={`/apps/${item.id}`} className="btn primary">View details</Link>
        {item.kind === 'application' && (
          <Link to={`/apps/${item.id}/policy`} className="btn">Policy</Link>
        )}
      </div>
    </div>
  )
}

export default Card
