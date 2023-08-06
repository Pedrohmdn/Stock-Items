import DeleteButton from '../DeleteButton'
import EditButton from '../EditButton'
import Styles from '../ViewItem/styles.module.css'
import PropTypes from 'prop-types'

ViewItem.propTypes = {
  data: PropTypes.object,
}

export default function ViewItem(props) {
  const formattedPrice = props.data.price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <>
      <div className={Styles.container}>
        <h2>{props.data.name}</h2>
        <EditButton id={props.data.id} />
        <DeleteButton id={props.data.id} />
      </div>
      <div className={Styles.container}>
        <span>Categoria: {props.data.category}</span>
        <span>Quantidade: {props.data.quantity}</span>
        <span>Preço: {formattedPrice}</span>
      </div>
      <p className={Styles.description}>{props.data.description}</p>
      <div className={Styles.date}>
        <span>Cadastrado em: {props.data.creationDate.toLocaleString()}</span>
        <span>
          {props.data.lastUpdate
            ? `Atualizado em: ${props.data.lastUpdate.toLocaleString()}`
            : ''}
        </span>
      </div>
    </>
  )
}
