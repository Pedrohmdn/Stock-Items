import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useStock() {
  const navigate = useNavigate()

  const [items, setItems] = useState(() => {
    const stock = localStorage.getItem('stock-items')
    if (!stock) return []
    const items = JSON.parse(stock)
    items.forEach((item) => {
      item.creationDate = new Date(item.creationDate)
      item.lastUpdate = new Date(item.lastUpdate)
    })
    return items
  })

  const addItem = (newItem) => {
    const validation = items.find((item) => item.name === newItem.name)

    if (validation) {
      alert('Esse Item Já existe, tente Novamente!')
    } else {
      setItems((state) => {
        const newState = [newItem, ...state]
        localStorage.setItem('stock-items', JSON.stringify(newState))
        return newState
      })
      alert('Item salvo com Sucesso!')
    }
  }

  const deleteItem = (id) => {
    const item = items.find((item) => item.id === id)
    const validation = confirm(`Deseja excluir o item "${item.name}"?`)

    if (validation) {
      setItems((state) => {
        const newState = state.filter((item) => item.id !== id)
        localStorage.setItem('stock-items', JSON.stringify(newState))
        return newState
      })
    }
    return navigate('/stock')
  }
  const updateItem = (newAttributes, itemId) => {
    setItems((state) => {
      const itemIndex = state.findIndex((item) => item.id === itemId)
      const updatedItems = [...state]
      Object.assign(updatedItems[itemIndex], newAttributes, {
        lastUpdate: new Date(),
      })
      localStorage.setItem('stock-items', JSON.stringify(updatedItems))
      return updatedItems
    })
    alert('Item atualizado')
    return navigate('/stock')
  }

  const getItem = (id) => {
    const item = items.find((item) => item.id === +id)

    return item
  }

  return { items, addItem, deleteItem, updateItem, getItem }
}
