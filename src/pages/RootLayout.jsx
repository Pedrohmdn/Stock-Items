import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { StockContextProvider } from '../contexts/StockContext'

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <StockContextProvider>
          <Outlet />
        </StockContextProvider>
      </main>
      <footer>
        <p>Feito com React e React Router</p>
      </footer>
    </>
  )
}
