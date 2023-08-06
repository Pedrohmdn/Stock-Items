/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useState } from 'react'
import Styles from '../ItemForm/styles.module.css'
import PropTypes from 'prop-types'
import StockContext from '../../contexts/StockContext'
import StockItem, { CATEGORIES } from '../../entities/StockItem'

ItemForm.propTypes = {
  itemToUpdate: PropTypes.object,
}

export default function ItemForm({ itemToUpdate }) {
  const defaultItem = {
    name: '',
    quantity: 0,
    price: 0,
    category: '',
    description: '',
  }
  const [item, setItem] = useState(itemToUpdate || defaultItem)

  const { addItem, updateItem } = useContext(StockContext)

  function handleSubmit(ev) {
    ev.preventDefault()

    if (itemToUpdate) {
      try {
        updateItem(item, itemToUpdate.id)
      } catch (err) {
        console.log(err.message)
      }
    } else {
      try {
        const newItem = new StockItem(item)
        addItem(newItem)
      } catch (err) {
        console.log(err.message)
      }
    }

    setItem(defaultItem)
  }
  return (
    <div className={Styles.containerForm}>
      <form onSubmit={handleSubmit} className={Styles.formItem}>
        <div className={Styles.row1}>
          <div className={Styles.field}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              value={item.name}
              onChange={(ev) =>
                setItem((state) => {
                  return { ...state, name: ev.target.value }
                })
              }
              required
            />
          </div>
          <div className={Styles.field}>
            <label htmlFor="quantity">Quantidade</label>
            <input
              type="number"
              id="quantity"
              value={item.quantity}
              onChange={(ev) =>
                setItem((state) => {
                  return { ...state, quantity: ev.target.value }
                })
              }
              required
            />
          </div>
          <div className={Styles.field}>
            <label htmlFor="price">Preço</label>
            <input
              type="number"
              id="price"
              value={item.price}
              onChange={(ev) =>
                setItem((state) => {
                  return { ...state, price: ev.target.value }
                })
              }
              required
            />
          </div>
          <div className={Styles.field}>
            <label htmlFor="category">Categoria</label>
            <select
              name="category"
              id="category"
              value={item.category}
              onChange={(ev) =>
                setItem((state) => {
                  return { ...state, category: ev.target.value }
                })
              }
              required
            >
              <option value="" disabled>
                Selecione uma categoria
              </option>
              {CATEGORIES.map((category) => (
                <option
                  key={category}
                  value={category}
                  defaultChecked={item.category === category}
                >
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={Styles.row2}>
          <label htmlFor="description">Descrição</label>
          <textarea
            name="description"
            id="description"
            rows="8"
            value={item.description}
            onChange={(ev) =>
              setItem((state) => {
                return { ...state, description: ev.target.value }
              })
            }
          ></textarea>
        </div>
        <button type="submit" className={`${Styles.buttonSubmit} viewButton`}>
          Salvar
        </button>
      </form>
    </div>
  )
}
