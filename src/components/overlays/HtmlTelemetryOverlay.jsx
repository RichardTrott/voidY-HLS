import React from 'react'
import { observer } from 'mobx-react'
import { HtmlTally } from './HtmlTally'
import { StarshipOrtho } from '../starship/StarshipOrtho'
import { TrajectoryGraph } from './TrajectoryGraph'
import { ModeSwitch } from './ModeSwitch'
import '../../styles/telemetryOverlay.css'

export const HtmlTelemetryOverlay = observer((props) => {
    return (
        <div className="telemetry_overlay">
            <div className="top_row">
                <div className="master_mode">
                    <div className="section_label">
                        <div className="label_name">Mission Mode</div>
                    </div>
                    <ModeSwitch />
                </div>
                <div className="tally_group">
                    <div className="tally_group_heading">Orbit</div>
                    <div className="tally_group_items">
                        <HtmlTally 
                            value={122.2}
                            unit={'km'}
                            label={'Aposelene'}
                        />
                        <HtmlTally 
                            value={100.5}
                            unit={'km'}
                            label={'Periselene'}
                        />
                        <HtmlTally 
                            value={'89.5°'}
                            unit={''}
                            label={'Inclination'}
                        />
                    </div>
                </div>
                <div className="tally_group">
                    <div className="tally_group_heading">Comms</div>
                    <div className="tally_group_items">
                        <HtmlTally 
                            value={45.5}
                            unit={'dBm'}
                            label={'Orion'}
                        />
                        <HtmlTally 
                            value={15.1}
                            unit={'dBm'}
                            label={'Gateway'}
                        />
                        <HtmlTally 
                            value={'1.5'}
                            unit={'dBm'}
                            label={'DSN'}
                        />
                    </div>
                </div>

                <div className="tally_group">
                    <div className="tally_group_heading">Time</div>
                    <div className="tally_group_items">
                        <HtmlTally 
                            value={'T-04:22:01'}
                            unit={''}
                            label={'LSS'}
                        />
                        <HtmlTally 
                            value={'T+144:12:41'}
                            unit={''}
                            label={'Mission'}
                        />
                    </div>
                </div>
            </div>
            <div className="center_row">
                <StarshipOrtho />
                <TrajectoryGraph />
            </div>
            <div className="bottom_row">
                <HtmlTally
                    value={'T+144:12:41'}
                    unit={''}
                    label={'Mission'}
                />
            </div>
        </div>
    )
})
