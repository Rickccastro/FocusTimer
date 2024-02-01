import * as timer from './timer.js'
import state from './state.js'
import * as  sounds from './sounds.js'

export function play() {

    state.isRunning=!state.isRunning
    if(state.isRunning){
        timer.countdown()
        
    }
}
export function pause() {

    state.isRunning=false
}


export function timeUp() {

    timer.addNumber()
}

export function timeDown() {

    timer.minusNumber()
}

export function forest(){
    sounds.buttonPressFloresta.play()
}

export function cloud(){
    sounds.buttonPressCloud.play()
}
export function mkt(){
    sounds.buttonPressMkt.play()
}
export function flame(){
    sounds.buttonPressFlame.play()
}




