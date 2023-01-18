"use strict"

const draggables = document.querySelectorAll(".draggable")
const containers = document.querySelectorAll(".container")

draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", () => draggable.classList.add("dragging"))
    draggable.addEventListener("dragend", () => draggable.classList.remove("dragging"))
})

containers.forEach(container => {
    container.addEventListener("dragover", (e) => {
        e.preventDefault()
    })
})
     
function getDragAfterElement(container, y) {
    const draggableElemnts = [...container.querySelectorAll(".draggable.not(.dragging")]

    return draggableElements.reduce((closest, child) => {

    })
}