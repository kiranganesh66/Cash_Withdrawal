import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  render() {
    const {denominationsList} = this.props
    const {value, id} = denominationsList
    return (
      <div className="bg-Main">
        <div className="sub-bg">
          {/* //profie */}
          <div className="profile-Bg">
            <div className="bg">
              <p className="Letr">S</p>
            </div>
            <p className="Name">Sarah william</p>
          </div>
          {/* //blance */}
          <div className="BalanceCont">
            <h1>Your Balance</h1>
            <div>
              <h1 className="Name">2000</h1>
              <p className="Letr">in Rupees</p>
            </div>
          </div>
          {/* //withdraw */}
          <div className="withdraw_cN">
            <h1>WithDraw</h1>
            <p>Choose sum (in rupees)</p>
            <ul>
              <DenominationItem />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
