const closed = document.querySelector(".closed")
const open = document.querySelector(".open")

function openFace() {
    if (closed.classList.contains("active")) {
        open.classList.add("active")
        closed.classList.remove("active")
    }
}

function closedFace() {
    if (open.classList.contains("active")) {
        closed.classList.add("active")
        open.classList.remove("active")
    }
}