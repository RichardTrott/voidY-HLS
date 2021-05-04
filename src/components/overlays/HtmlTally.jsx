import React from 'react'
import '../../styles/tally.css'

export const HtmlTally = ({value, unit, label}) => (
    <div className="tally">
        <div className="tally_upper">
            <div className="tally_label">{label}</div> 
        </div>
        <div className="tally_lower">
            <div className="tally_value">{value}</div>
            <div className="tally_unit">{unit}</div>
        </div>
    </div>
)