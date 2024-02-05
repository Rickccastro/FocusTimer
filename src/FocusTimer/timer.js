import state from "./state.js"
import * as elements from "./elements.js"
import * as sounds from "./sounds.js"

export function countdown() {

    clearTimeout(state.countdown)
    if (state.isRunning == false) {

        return
    }

    let minutes = Number(elements.minutes.textContent)
    let seconds = Number(elements.seconds.textContent)

    seconds--

    if (seconds < 0 || seconds > 60) {
        seconds = 59
        minutes-- 
    }

    if (minutes < 0) {
        return
    }

    updateDisplay(minutes, seconds)

   state.countdown= setTimeout(() => countdown(), 1000)

}

export function addNumber() {

    let seconds = Number(elements.seconds.textContent);
    seconds += 5
    if (seconds > 59) {
        seconds = 59
    }
    elements.seconds.textContent = String(seconds).padStart(2, "0");
}
export function minusNumber() {

    let seconds = Number(elements.seconds.textContent);
    seconds -= 5

    if (seconds <0) {
        seconds = 0
    }

    elements.seconds.textContent = String(seconds).padStart(2, "0");


}

export function updateDisplay(minutes, seconds) {

    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    elements.minutes.textContent = String(minutes).padStart(2, "0")
    elements.seconds.textContent = String(seconds).padStart(2, "0")
}

export function stopMusic(){
    sounds.AllMusics.buttonPressFloresta.pause()
    sounds.AllMusics.buttonPressCloud.pause()
    sounds.AllMusics.buttonPressMkt.pause()
    sounds.AllMusics.buttonPressFlame.pause()

}