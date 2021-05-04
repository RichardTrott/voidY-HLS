import { makeObservable, observable, action } from 'mobx'

/**
 * Given a previously known value and a planned actual value,
 * generate a believable deviated actual next value
 */
const deviate = (prevDelta, nextPlanned) => (Math.random() * (prevDelta - nextPlanned) + nextPlanned)
const last = arr => arr[arr.length - 1]

export const MODES = {
    ORBIT: {
        id: 10,
        display: 'Orbit'
    },
    DESCENT_INIT: {
        id: 15,
        display: 'Descent Countdown'
    },
    DESCENT: {
        id: 20,
        display: 'Powered Descent'
    },
    TERMINAL: {
        id: 30,
        display: 'Terminal Descent'
    },
    LANDED: {
        id: 40,
        display: 'Landed'
    },
    ASCENT: {
        id: 55,
        display: 'Ascent'
    }
}

Object.freeze(MODES)
Object.seal(MODES)

class Telemetry {
    mode = MODES.ORBIT.id
    paused = false
    plan = []
    actual = []
    remainingTime = Infinity
    startTime = null
    endTime = null

    constructor () {
        makeObservable(this, {
            mode: observable,
            paused: observable,
            plan: observable,
            actual: observable,
            remainingTime: observable,
            startTime: observable,
            endTime: observable,

            setMode: action,
        })
    }

    /**
     * Generate fake descent telemetry
     */
    generatePlan (minutes) {
        const milliseconds = minutes * 60000
        this.plan = new Array(minutes)
        let _alt = 0
        let _vel = 0
        this.endTime = new Date(this.startTime + milliseconds)
        this.totalTime = minutes
        this.remainingTime = minutes

        for (let i = 0; i <= minutes; i++) {
            _alt = Math.log(i + 1) * 50
            _vel = Math.log(Math.sqrt(i * 27))

            this.plan[minutes - i] = {
                t: new Date(this.endTime - (i * milliseconds)),
                altitude: _alt, // meters
                velocity: Math.max(_vel, 0) // m/s
            }
        }
    }

    startDescent () {
        this.startTime = Date.now()
        this.generatePlan(60)
        this.queueTelemetryFrame(this.simNextMinute)
    }

    simNextMinute () {
        const t = this.totalTime - this.remainingTime
        const planned = this.plan[t]
        const prevActual = last(this.actual)

        this.actual.push({
            ...planned,
            altitude: prevActual ? deviate(prevActual.altitude, planned.altitude) : planned.altitude, // meters
            velocity: prevActual ? deviate(prevActual.velocity, planned.velocity) : planned.velocity
        })


        if (!this.paused && this.remainingTime > 0) {
            this.queueTelemetryFrame(this.simNextMinute)
        }

        this.remainingTime -= 1
    }

    queueTelemetryFrame (cb) {
        cancelAnimationFrame(this._raf)
        clearTimeout(this._timer)

        this._timer = setTimeout(() => {
            this._raf = requestAnimationFrame(cb.bind(this))
        }, 1000)  
    } 

    setMode (modeKey) {
        this.mode = MODES[modeKey].id
    }
}

/**
 * Expose a singleton Telemetry Store instance for the main thread
 */
let _singletonStore
export const TelemetryStore = _singletonStore || (_singletonStore = new Telemetry())
