import { Controller } from "@hotwired/stimulus"
import Sortable from "sortablejs"

// Export initSortable function
export const initSortable = () => {
  const list = document.querySelector("#results")
  Sortable.create(list, {
    ghostClass: "ghost",
    animation: 150,
    // onEnd: (event) => {
    //   alert(`${event.oldIndex} moved to ${event.newIndex}`)
    // }
  })
}

// Connects to data-controller="init-sortable"
export default class extends Controller {
  connect() {
    initSortable()
  }
}
