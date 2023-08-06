import { useContext } from 'react'
import PropTypes from 'prop-types'
import StockContext from '../../contexts/StockContext'

DeleteButton.propTypes = {
  id: PropTypes.number,
}
export default function DeleteButton(props) {
  const { deleteItem } = useContext(StockContext)
  return (
    <>
      <button className="deleteButton" onClick={() => deleteItem(props.id)}>
        Excluir
      </button>
    </>
  )
}
