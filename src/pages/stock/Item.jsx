import { useParams } from 'react-router-dom'
import ViewItem from '../../components/ViewItem'
import { useContext } from 'react'
import StockContext from '../../contexts/StockContext'

export default function Item() {
  const { getItem } = useContext(StockContext)
  const { itemId } = useParams()
  const item = getItem(itemId)

  return (
    <>
      <ViewItem data={item} />
    </>
  )
}
