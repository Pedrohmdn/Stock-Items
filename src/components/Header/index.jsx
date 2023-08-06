import { Link, useLocation } from 'react-router-dom'
import Styles from './styles.module.css'

export default function Header() {
  const { pathname } = useLocation()
  return (
    <header className={Styles.header}>
      <div>
        <Link to={'/'}>
          <h3>REACT STOCK</h3>
        </Link>
      </div>
      <nav className={Styles.nav}>
        <Link
          className={`${Styles.link} ${pathname === '/' ? 'active' : ''}`}
          to={'/'}
        >
          Início
        </Link>
        <Link
          className={`${Styles.link} ${pathname === '/stock' ? 'active' : ''}`}
          to={'/stock'}
        >
          Items
        </Link>
      </nav>
    </header>
  )
}
