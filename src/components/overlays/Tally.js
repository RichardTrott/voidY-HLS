import {
    Group3DFacade,
} from 'troika-3d'
import { UIBlock3DFacade as Block } from 'troika-3d-ui'


export class Tally extends Group3DFacade {
    describeChildren() {
        return [
            {
                facade: Block,
                key: 'tally_wrap',
                justifyContent: 'stretch',
                flexDirection: 'column',
                children: [
                    {
                        facade: Block,
                        key: 'tally_top',
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        borderColor: 0xFF00FF,
                        lineHeight: 1,
                        letterSpacing: -0.07,
                        borderWidth: [0, 0, 0.01, 0.01],
                        borderStyle: 'solid',
                        children: [
                            {
                                key: 'tally_value',
                                facade: Block,
                                text: `${this.tallyValue}`,
                                font: 'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff',
                                fontSize: 0.3,
                                flex: 1,
                                anchorX: 'left',
                                anchorY: 'bottom',
                                color: null,
                                textFillOpacity: 0,
                                textStrokeWidth : 0.005,
                                textStrokeOpacity: 1.0,
                                textStrokeColor: 0xffffff,
                                scaleX: 1,
                                scaleY: 1,
                                scaleZ: 1,
                                rotateX: 0,
                                rotateZ: 0,
                            },
                            {
                                key: '_tally_value_units',
                                facade: Block,
                                // castShadow: state.shadows,
                                text: this.tallyUnits,
                                font: 'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff',
                                fontSize: 0.1,
                                anchorX: 'left',
                                anchorY: 'bottom',
                                color: 0xffffff,
                                scaleX: 1,
                                scaleY: 1,
                                scaleZ: 1,
                                rotateX: 0,
                                rotateZ: 0,
                            },
                        ]
                    },
                    {
                        key: '_tally_label',
                        facade: Block,
                        text: this.tallyLabel.toUpperCase(),
                        font: 'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff',
                        fontSize: 0.1,
                        anchorX: 'left',
                        anchorY: 'top',
                        color: 0xffffff,
                        scaleX: 1,
                        scaleY: 1,
                        scaleZ: 1,
                        rotateX: 0,
                        rotateZ: 0,
                    }
                ]
            }
        ]
    }
}
