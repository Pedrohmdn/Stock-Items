import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

EditButton.propTypes = {
  id: PropTypes.number,
}

export default function EditButton(props) {
  return (
    <>
      <Link to={`/stock/edItem/${props.id}`}>
        <button className="editButton">Atualizar</button>
      </Link>
    </>
  )
}
