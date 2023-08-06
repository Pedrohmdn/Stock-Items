import Styles from '../InformationCard/styles.module.css'
import PropTypes from 'prop-types'

InformationCard.propTypes = {
  text: PropTypes.string,
  data: PropTypes.number,
}
export default function InformationCard(props) {
  return (
    <>
      <div className={Styles.cardContainer}>
        <span className={Styles.text}>{props.text}</span>
        <span className={Styles.data}>{props.data}</span>
      </div>
    </>
  )
}
