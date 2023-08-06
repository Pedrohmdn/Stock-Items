export const CATEGORIES = [
  'Jogos',
  'Livros',
  'Brinquedos',
  'Acessórios',
  'Eletrônicos',
]

const idGnt = (quantity) => {
  return Math.floor(Math.random() * 10000000)
}

export default class StockItem {
  constructor({ name, quantity, price, category, description }) {
    this.id = idGnt()
    this.name = name
    this.quantity = +quantity
    this.price = +price
    this.category = category
    this.description = description
    this.creationDate = new Date()
    this.lastUpdate = null
    this.#validate()
  }

  #validate() {
    const validName = typeof this.name === 'string'
    const validDescription = typeof this.description === 'string'
    const validQuantity =
      typeof this.quantity === 'number' && Number.isInteger(this.quantity)
    const validPrice = typeof this.price === 'number'
    const validCategory = CATEGORIES.includes(this.category)

    if (
      !(
        validName &&
        validDescription &&
        validQuantity &&
        validPrice &&
        validCategory
      )
    ) {
      throw new Error('Invalid item!')
    }
  }
}
