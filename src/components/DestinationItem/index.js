import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {name, imgUrl} = destinationItem

  return (
    <li className="eachItem-container">
      <img src={imgUrl} className="image" alt={name} />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
