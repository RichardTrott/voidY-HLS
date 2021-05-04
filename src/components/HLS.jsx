import '../styles/HLS.css';
import React from 'react';
import useResizeObserver from "use-resize-observer"
import { observer } from 'mobx-react'
import { Canvas3D } from 'troika-3d'
import { Luna } from './luna/Luna'
import { LunarStarship } from './starship/LunarStarship'
import { Tally } from './overlays/Tally'
import { HtmlTelemetryOverlay } from './overlays/HtmlTelemetryOverlay'
import { TelemetryStore } from '../stores/TelemetryStore'

const STATS = true

export const HLS = observer(() => {
  const { ref, width = 1, height = 1 } = useResizeObserver()

  return (
    <div className="hls_mock" ref={ref}>
      <div className="mock_descent_camera_view">
        {width && height && <Canvas3D
          antialias
          stats={STATS}
          width={width}
          backgroundColor={0x000000}
          height={height}
          camera={{
            aspect: width / height,
            fov: 90,
            x: 0,
            y: 0,
            z: 1.1,
            near: 0.03,
            lookAt: { x: 0, y: 1.2, z: 0 }
          }}
          lights={[
            {
              type: 'spot',
              color: 0xffffff,
              x: 10000,
              intensity: 1.5,
              y: 2000,
              z: 1.1,
            },
            {
              type: 'directional',
              color: 0xd9e7ff, // Blue cast from earth
              intensity: 0.1,
              x: 0,
              y: 0,
              z: 1
            }
          ]}
          objects={[
            {
              key: 'luna',
              facade: Luna,
              scaleX: 1,
              scaleY: 1,
              scaleZ: 1,
              z: -7900,
              y: -6500,
              rotateY: 0,
              animation: {
                from: { rotateX: -Math.PI },
                to: { rotateX: Math.PI },
                duration: 1024000,
                iterations: Infinity
              }
            },
            {
              key: 'lunar_starship',
              facade: LunarStarship,
              scaleX: 0.2,
              scaleY: 0.2,
              scaleZ: 0.2,
              x: 0,
              y: 0.39,
              z: 1.16,
              rotateX: -Math.PI / 9,
              color: 0xFFFFFF,
            },
            {
              key: 'tally_',
              facade: Tally,
              tallyUnits: 'm',
              tallyValue: 20,
              tallyLabel: 'Crater',
              scaleX: 1,
              scaleY: 1,
              scaleZ: 1,
              x: 0,
              y: 0,
              z: 1.5,
            },
            // {
            //   key: 'descent_graph',
            //   facade: DescentGraph,
            //   x: 0,
            //   y: 0.39,
            //   z: 0.9,
            // }
          ]}
        />
        }
      </div>
      {/* {width && height && <Canvas2D
        stats={STATS}
        width={width}
        height={height}
        objects={{
          key: 'scene',
          facade: Overlay2D
        }}
      />
      } */}
      {/* <div className="descent_overlay">
        {width && height && <PrimaryOverlay {...{width, height}} />}
      </div> */}
      <div className="html_overlay">
        <HtmlTelemetryOverlay />
        <button 
          style={{position: 'absolute', zIndex: 999}} 
          onClick={TelemetryStore.startDescent.bind(TelemetryStore)}
        >TEMP START</button>
      </div>
      <div className="ident">
        <div>Camera +Z30_AFT</div>
        <div>LSS-02 <em>Yawning Angel</em></div>
      </div>
    </div>
  )
})
