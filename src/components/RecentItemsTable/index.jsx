import { useContext } from 'react'
import ViewButton from '../ViewButton'
import Styles from './styles.module.css'
import StockContext from '../../contexts/StockContext'

export default function RecentItemsTable() {
  const { items } = useContext(StockContext)

  const today = new Date()
  const limiteDate = new Date()
  limiteDate.setDate(limiteDate.getDate() - 10)
  const itemsRecent = items.filter(
    (item) => item.creationDate >= limiteDate && item.creationDate <= today,
  )
  return (
    <div className={Styles.container}>
      <table className={Styles.tableRecentItems}>
        <thead>
          <tr>
            <th>Itens recentes</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {itemsRecent.length > 0
            ? itemsRecent.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <ViewButton id={item.id} />
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  )
}
