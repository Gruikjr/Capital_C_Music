// load sound via <audio> tag 
const audioElement = document.querySelector("audio")
const audioCtx = new AudioContext()
const track = audioCtx.createMediaElementSource(audioElement)