import { Outlet } from 'react-router-dom'
import LayoutStock from '../../components/LayoutStock'

export default function RootLayoutStock() {
  return (
    <>
      <LayoutStock />
      <Outlet />
    </>
  )
}
