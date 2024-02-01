import { controls, controlsMusic } from "./elements.js"
import * as actions from "./actions.js"

export function RegisterControls() {

    controls.addEventListener('click',(event) =>{
        const action= event.target.dataset.action

        if(typeof actions[action] != "function"){
            console.log("erro")
            return
        }

        actions[action]()

        })
    controlsMusic.addEventListener('click',(event) =>{
        const action= event.target.dataset.action

        if(typeof actions[action] != "function"){
            console.log("erro")
            return
        }

        actions[action]()

        })
}