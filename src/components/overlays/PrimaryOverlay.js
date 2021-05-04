import React from 'react'
import { Canvas3D } from 'troika-3d'
import { UIBlock3DFacade as Block } from 'troika-3d-ui'
import { Tally } from './Tally'

export class PrimaryOverlay extends React.Component {
    render () {
        const {height, width} = this.props

        return (
            <Canvas3D
                antialias
                stats={false}
                width={width}
                height={height}
                camera={{
                aspect: width / height,
                fov: 60,
                x: 0,
                y: 0,
                z: 4,
                }}
                objects={[
                     {
                        facade: Block,
                        key: 'primary_stats_wrap',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        width: 2,
                        children: [
                    
                            {
                                key: 'vertical_rate',
                                facade: Tally,
                                tallyUnits: 'm/s²',
                                tallyValue: 100,
                                tallyLabel: 'Vertical Velocity Rate',
                                scaleX: 1,
                                scaleY: 1,
                                scaleZ: 1,
                                x: 0,
                                y: 0,
                                z: 1.5,
                            },
                            {
                                key: 'vertical_rate',
                                facade: Tally,
                                tallyUnits: 'm/s²',
                                tallyValue: 100,
                                tallyLabel: 'Vertical Velocity Rate',
                                scaleX: 1,
                                scaleY: 1,
                                scaleZ: 1,
                                x: 0,
                                y: 0,
                                z: 1.5,
                            }
                        ]
                    }
                ]}

            />
        )
    }
}