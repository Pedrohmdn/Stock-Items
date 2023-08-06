import { useContext, useState } from 'react'
import StockContext from '../contexts/StockContext'

export default function useDashBoard() {
  const { items } = useContext(StockContext)
  const [totalItems, setTotalItems] = useState(0)
  const [recentItems, setRecentItems] = useState(0)
  const [itemsRunningOut, setItemsRunningOut] = useState(0)
  const [differentItems, setDifferentItems] = useState(0)

  const calculateTotalItems = () => {
    setTotalItems(() => {
      const TotalItems = items.reduce((sum, item) => sum + item.quantity, 0)

      return +TotalItems
    })
  }

  const calculateItemsRunningOut = () => {
    setItemsRunningOut(() => {
      const itemsRunningOut = items.filter((item) => item.quantity < 10)
      return itemsRunningOut.length
    })
  }

  const calculateDifferentItems = () => {
    setDifferentItems(() => {
      const differentItems = items.filter(
        (item, index) =>
          item.name !== items[index + 1]?.name &&
          items[index + 1]?.name !== null,
      )

      return differentItems.length
    })
  }
  const calculateRecentItems = () => {
    const today = new Date()
    const limiteDate = new Date()
    limiteDate.setDate(limiteDate.getDate() - 10)

    setRecentItems(() => {
      const recentItems = items.filter(
        (item) => item.creationDate >= limiteDate && item.creationDate <= today,
      )
      return recentItems.length
    })
  }

  return {
    totalItems,
    recentItems,
    itemsRunningOut,
    differentItems,
    calculateTotalItems,
    calculateItemsRunningOut,
    calculateDifferentItems,
    calculateRecentItems,
  }
}
