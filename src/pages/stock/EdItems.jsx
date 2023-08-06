import { useParams } from 'react-router-dom'
import ItemForm from '../../components/ItemForm'
import { useContext } from 'react'
import StockContext from '../../contexts/StockContext'

export default function EdItems() {
  const { itemId } = useParams()
  const { getItem } = useContext(StockContext)
  const item = getItem(itemId)
  return (
    <>
      <h2 style={{ fontWeight: 'lighter' }}>Atualizar Item - {item.name}</h2>
      <ItemForm itemToUpdate={item} />
    </>
  )
}
