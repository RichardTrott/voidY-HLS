import {
    Mesh,
    MeshPhongMaterial,
    CylinderBufferGeometry,
    DoubleSide
} from 'three'
import { Object3DFacade } from 'troika-3d'

const geometry = new CylinderBufferGeometry(0.8, 0.8, 3, 32, 1, false)
const material = new MeshPhongMaterial({
    transparent: true,
    opacity: 1.0,
    side: DoubleSide,
    color: 0xFFFFFF,
    emissive: 0xFFFFFF,
    emissiveIntensity: 0.07 // Some reflection from the lunar surface
})

/**
 * TODO: leg fairings/blisters
 */
export class LunarStarship extends Object3DFacade {
    initThreeObject() {
        return new Mesh(geometry, material.clone())
    }
}
