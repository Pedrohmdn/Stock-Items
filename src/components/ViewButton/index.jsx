import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

ViewButton.propTypes = {
  id: PropTypes.number,
}

export default function ViewButton(props) {
  return (
    <>
      <Link to={`/stock/item/${props.id}`}>
        <button className="viewButton">Ver</button>
      </Link>
    </>
  )
}
