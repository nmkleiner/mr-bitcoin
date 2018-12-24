
import React from 'react'

import './ContactFilter.css'

export default props => {

    return (        
        <div className="contact-filter">
            <input
                style={{ float: 'left', fontSize: '20px' }}
                type="text"
                value={props.value}
                onChange={props.onFilterNameChange}
            />
        </div>
    )
}

