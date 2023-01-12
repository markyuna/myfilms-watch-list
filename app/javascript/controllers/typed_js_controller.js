import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

// Connects to data-controller="typed-js"
export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Take your first step into a larger world…", "Browse your watched films."],
      typeSpeed: 30,
      loop: true
    });
  }
}
