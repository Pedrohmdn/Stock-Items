import { createContext } from 'react'

import useStock from '../hooks/useStock'
import PropTypes from 'prop-types'

const StockContext = createContext()
StockContextProvider.propTypes = {
  children: PropTypes.node,
}

export function StockContextProvider({ children }) {
  const stock = useStock()
  return <StockContext.Provider value={stock}>{children}</StockContext.Provider>
}

export default StockContext
