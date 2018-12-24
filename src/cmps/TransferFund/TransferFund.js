
import React, { Component }  from 'react';

import './TransferFund.css'

class TransferFund extends Component {
    
    render() {
        const {amount} = this.props
        return (
        <div>
            Transfer moneys to {this.props.contact}
            <form onSubmit={this.props.onSubmit}>
                Amount: 
                <input
                value={amount}
                onChange={this.props.onChange} type="number" min={0} max={100}/>
                <button type="submit">transfer</button>
            </form>
        </div>
        )
    }
}

export default TransferFund
