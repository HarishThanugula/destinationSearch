import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  render() {
    const {destinationsList} = this.props
    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <input type="search" placeholder="search" />
        <ul className="cards-container">
          {destinationsList.map(eachItem => (
            <DestinationItem destinationListItem={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
