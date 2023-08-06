import { useContext } from 'react'
import Styles from './styles.module.css'
import ViewButton from '../ViewButton'
import DeleteButton from '../DeleteButton'
import EditButton from '../EditButton'
import StockContext from '../../contexts/StockContext'

export default function ItemsTable() {
  const { items } = useContext(StockContext)
  return (
    <div className={Styles.container}>
      <table className={Styles.tableAllItems}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Em Estoque</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0
            ? items.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.category}</td>
                  <td className="buttonsTable">
                    <ViewButton id={item.id} />
                    <EditButton id={item.id} />
                    <DeleteButton id={item.id} />
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  )
}
