let playing = false

const sound1 = new Audio("sound/meo.mp3")
const sound2 = new Audio("sound/szamuraj.mp3")
const sound3 = new Audio("sound/harang.mp3")
const sound4 = new Audio("sound/so.mp3")
const sound5 = new Audio("sound/csisztambul.mp3")

function playAudio(sound) {
    if(playing ===false){
    sound.play()
    playing = true
    } else {
        sound.pause()
        playing = false
    }
}