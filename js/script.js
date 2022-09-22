var topo = document.body

function toTop() {
    topo.scrollIntoView({behavior:"smooth"})
}
function scrollTo(element) {
    document.querySelector(element).scrollIntoView({behavior:"smooth"})
}
document.querySelector("#menuTerror").addEventListener("click" , function(event) {
    event.preventDefault()
    scrollTo("#terror")
})
document.querySelector("#menuAventura").addEventListener("click" , function(event) {
    event.preventDefault()
    scrollTo("#aventura")
})
document.querySelector("#menuMinhasRedes").addEventListener("click" , function(event) {
    event.preventDefault()
    scrollTo("#minhas-redes")
})
document.querySelector("#desenhos").addEventListener("click" , function(event) {
    event.preventDefault()
    scrollTo(".desenhos")
})
document.querySelector("#comédia").addEventListener("click" , function(event) {
    event.preventDefault()
    scrollTo(".comédia")
})