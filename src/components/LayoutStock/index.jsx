import Styles from '../LayoutStock/styles.module.css'
import { Link, useLocation } from 'react-router-dom'

export default function LayoutStock() {
  const { pathname } = useLocation()
  return (
    <>
      <div className={Styles.containerLayout}>
        <h1 className={Styles.title}>Stock Items</h1>
        <div className={Styles.containerButton}>
          <Link
            className={`${Styles.link} ${
              pathname === '/stock' ? 'active' : ''
            }`}
            to={'/stock'}
          >
            Todos os Itens
          </Link>
          <Link
            className={`${Styles.link} ${
              pathname === '/stock/addItem' ? 'active' : ''
            }`}
            to={'addItem'}
          >
            Novo Item
          </Link>
        </div>
        <hr />
      </div>
    </>
  )
}
