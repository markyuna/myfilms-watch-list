import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="disable-button"
export default class extends Controller {
  static targets = ["button", "link"]

  connect() {
    console.log("Hello from our first Stimulus controller")
  }
  disable() {
    this.buttonTarget.innerText = "Bingo!"
    this.buttonTarget.setAttribute("disabled", "")
    this.linkTarget.classList.remove("d-none")
  }
  reset() {
    this.buttonTarget.innerText = "Click me!"
    this.buttonTarget.removeAttribute("disabled")
    this.linkTarget.classList.add("d-none")
  }
}
