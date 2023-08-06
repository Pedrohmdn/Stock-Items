import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import ListItems from './pages/stock/ListItems'
import RootLayout from './pages/RootLayout'
import AddItems from './pages/stock/AddItems'
import Item from './pages/stock/Item'
import EdItems from './pages/stock/EdItems'
import RootLayoutStock from './pages/stock/RootLayoutStock'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'stock',
        element: <RootLayoutStock />,
        children: [
          {
            index: true,
            element: <ListItems />,
          },
          {
            path: 'addItem',
            element: <AddItems />,
          },
          {
            path: 'item/:itemId',
            element: <Item />,
          },
          {
            path: 'edItem/:itemId',
            element: <EdItems />,
          },
        ],
      },
    ],
  },
])

export default router
