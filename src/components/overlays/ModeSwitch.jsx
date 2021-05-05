import React from 'react'
import { observer } from 'mobx-react'
import { TelemetryStore, MODES } from '../../stores/TelemetryStore'
import '../../styles/modeSwitch.css'

export const ModeSwitch = observer((props) => {
    const activeMode = TelemetryStore.mode

    return (
        <div className="main_mode_switch">
            {Object.entries(MODES).map(([modeKey, {id: modeId, display}]) => (
                <div 
                    key={modeId}
                    className={`mode mode_${modeKey.toLowerCase()} ${activeMode > modeId ? 'disabled' : ''} ${activeMode === modeId ? 'active' : ''}`}
                    onClick={activeMode <= modeId && TelemetryStore.setMode.bind(TelemetryStore, modeKey)} // Mode can only advance
                ><span class="material-icons-outlined">build</span></div>
            ))}
        </div>
    )
})
