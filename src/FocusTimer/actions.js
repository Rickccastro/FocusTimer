import * as timer from './timer.js'
import state from './state.js'
import * as  sounds from './sounds.js'

export function play() {

    state.isRunning = !state.isRunning
    if (state.isRunning) {
        timer.countdown()

    }
}
export function pause() {

    state.isRunning = false
}


export function timeUp() {


    timer.addNumber()
}

export function timeDown() {

    timer.minusNumber()
}

export function forest() {

    state.forest=!state.forest
    if(state.forest==true){
        timer.stopMusic()
        sounds.AllMusics.buttonPressFloresta.play()
    }else{
        timer.stopMusic()
    }
    console.log(state.forest)
}
export function cloud() {
    state.cloud=!state.cloud
    if(state.cloud==true){
        timer.stopMusic()
        sounds.AllMusics.buttonPressCloud.play()
    }else{
        timer.stopMusic()
    }
    console.log(state.cloud)
}
export function mkt() {
    state.mkt=!state.mkt
    if(state.mkt==true){
        timer.stopMusic()
        sounds.AllMusics.buttonPressMkt.play()
    }else{
        timer.stopMusic()
        }
    console.log(state.mkt)
}
export function flame() {
    state.flame=!state.flame
    if(state.flame==true){
        timer.stopMusic()
        sounds.AllMusics.buttonPressFlame.play()
    }else{
        timer.stopMusic()
    }
    console.log(state.flame)
}