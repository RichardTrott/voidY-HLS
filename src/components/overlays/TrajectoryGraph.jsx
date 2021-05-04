import '../../styles/trajectoryGraph.css'
import React from 'react'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import { line } from 'd3-shape'
import { scaleLinear, scaleTime } from 'd3-scale'
import useResizeObserver from "use-resize-observer"
import { TelemetryStore } from '../../stores/TelemetryStore'

const max = (arr, key) => arr.reduce((output, v) => Math.max(output, +v[key]), -Infinity)
const min = (arr, key) => arr.reduce((output, v) => Math.min(output, +v[key]), Infinity)

export const TrajectoryGraph = observer((props) => {
    const { ref, width = 1, height = 1 } = useResizeObserver()

    const planned = toJS(TelemetryStore.plan)
    const actual = toJS(TelemetryStore.actual)

    // TODO memoize all this
    const timeScale = scaleTime()
        .domain([min(planned, 't'), max(planned, 't')])
        .range([0, width])
        .nice()
    const altScale = scaleLinear()
        .domain([min(planned, 'altitude'), max(planned, 'altitude')])
        .range([height, 0])
    const velScale = scaleLinear()
        .domain([min(planned, 'velocity'), max(planned, 'velocity')])
        .range([height, height / 2])

    const altitudeLine = line()
        .x(d => timeScale(new Date(d.t)))
        .y(d => altScale(d.altitude))
    const velocityLine = line()
        .x(d => timeScale(new Date(d.t)))
        .y(d => velScale(d.velocity))

    return (
        <article className="trajectory_graph" ref={ref}>
            <div className="section_label">
                <div className="label_name">Projected Descent</div>
            </div>
            <svg>
                <g className="planned_alt">
                    <path d={altitudeLine(planned)} />
                </g>
                <g className="planned_vel">
                    <path d={velocityLine(planned)} />
                </g>
                <g className="actual_alt">
                    <path d={altitudeLine(actual)} />
                </g>
                <g className="actual_vel">
                    <path d={velocityLine(actual)} />
                </g>
            </svg>
        </article>
    )
})