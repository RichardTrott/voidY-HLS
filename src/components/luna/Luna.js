import { Object3DFacade } from 'troika-3d'
import { Mesh, MeshPhongMaterial, SphereBufferGeometry, TextureLoader } from 'three'

// Moon textures courtesy https://codepen.io/g12n/pen/vYBryJW
var textureURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg";
var displacementURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg";

const textureLoader = new TextureLoader()
var texture = textureLoader.load(textureURL);
var displacementMap = textureLoader.load(displacementURL);

var material = new MeshPhongMaterial(
    {
        color: 0xffffff,
        map: texture,
        displacementMap: displacementMap,
        displacementScale: 1.0,
        bumpMap: displacementMap,
        bumpScale: 0.5,
        reflectivity: 0,
        shininess: 0
    }

);

export class Luna extends Object3DFacade {
    constructor(parent) {
        let mesh = new Mesh(
            new SphereBufferGeometry(10000, 128, 128),
            material        
            )
        super(parent, mesh)
    }

    // set oceanColor(c) {
    //     this.threeObject.material.color.set(c)
    // }

    // set oceanTexture(t) {
    //     if (t !== this._oceanTextureUrl) {
    //         let material = this.threeObject.material
    //         material.map = t ? textureLoader.load(t) : null
    //         material.needsUpdate = true
    //         this._oceanTextureUrl = t
    //     }
    // }

    // set countryTexture(t) {
    //     if (t !== this._countryTextureUrl) {
    //         this._countryTexture = t ? textureLoader.load(t) : null
    //         this._countryTextureUrl = t
    //     }
    // }

    // _getCountryTextureMap() {
    //     return this._countryTexture
    // }

    // _getCountryColor(d, i, arr) {
    //     var fn = this.getCountryColor
    //     return fn ? fn(d, i, arr) : 0x000000
    // }
}