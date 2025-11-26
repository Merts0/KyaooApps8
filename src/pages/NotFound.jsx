import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'

function NotFound() {
  return (
    <PageTransition>
      <div className="container">
        <h2>Page not found</h2>
        <p>Return to the homepage.</p>
        <div className="actions" style={{ marginTop: '1rem' }}>
          <Link to="/" className="btn">Home</Link>
        </div>
      </div>
    </PageTransition>
  )
}

export default NotFound
