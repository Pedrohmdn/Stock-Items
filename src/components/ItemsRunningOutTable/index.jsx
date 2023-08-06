import { useContext } from 'react'
import ViewButton from '../ViewButton'
import Styles from './styles.module.css'
import StockContext from '../../contexts/StockContext'

export default function ItemsRunningOutTable() {
  const { items } = useContext(StockContext)
  const itemsRunningOut = items.filter((item) => item.quantity < 10)

  return (
    <>
      <div className={Styles.container}>
        <table className={Styles.tableItemsRunningOut}>
          <thead>
            <tr>
              <th>Itens acabando</th>
              <th>qtd.</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {itemsRunningOut.length > 0
              ? itemsRunningOut.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <ViewButton id={item.id} />
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </>
  )
}
