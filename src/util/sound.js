let audio = new Audio("./welcomHomeSir.mp3")
async function startSound() {
    console.log('sound')
    audio.play()
}
export { startSound }