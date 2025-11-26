import Card from '../components/Card.jsx'
import { getByKind } from '../data/catalog.js'
import PageTransition from '../components/PageTransition.jsx'

function Applications() {
  const items = getByKind('application')
  return (
    <PageTransition>
      <div className="container">
        <h2>Applications</h2>
        <div className="grid" style={{ marginTop: '1rem' }}>
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </PageTransition>
  )
}

export default Applications
