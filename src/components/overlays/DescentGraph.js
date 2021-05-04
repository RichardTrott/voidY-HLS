import {
    BoxFacade,
    Group3DFacade,
} from 'troika-3d'

export class DescentGraph extends Group3DFacade {
    describeChildren() {
        return [
            {
                key: 'descent_x_axis',
                facade: BoxFacade,
                height: () => 1,
                width:  () => 1,
                depth: () => 1,
                material: 'phong',
                'material.color': 0xFF0000,
                'material.opacity': 0.1,
                scaleX: 0.1,
                scaleY: 0.1,
                scaleZ: 1,
                rotateY: Math.PI / 4,
                rotateX: Math.PI / 4,
                rotateZ: Math.PI / 4,
            }
        ]
    }
}
