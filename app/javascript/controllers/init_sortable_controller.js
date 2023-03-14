import { Controller } from "@hotwired/stimulus"
import Sortable from "sortablejs"

// Export initSortable function
export const initSortable = () => {
  const list = document.querySelector("#results")
  Sortable.create(list)
}

// Connects to data-controller="init-sortable"
export default class extends Controller {
  connect() {
    initSortable()
  }
}
