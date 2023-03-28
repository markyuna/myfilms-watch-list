import { Controller } from "@hotwired/stimulus"
import { initSortable } from "./init_sortable_controller"
// Connects to data-controller="insert-movies"
export default class extends Controller {
  static targets = ["input", "results"]

  connect() {
    console.log("movies controller connected")
    this.fetchMovies("harry potter") // on 1st page load
    initSortable()
    // const list = document.querySelector("#results")
  }

  fetchMovies(query) {
    // fetch(`https://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=efc119fa`)
      .then(response => response.json())
      .then(data => this.insertMovies(data))
  }

  insertMovies(data) {
    data.Search.forEach((result) => {
      const movieTag = `<li class="list-group-item border-0">
        <img src="${result.Poster}" alt="" width="100">
      </li>`
      this.resultsTarget.insertAdjacentHTML("beforeend", movieTag)
    })
  }

  search(event) {
    event.preventDefault()
    this.resultsTarget.innerHTML = ""
    this.fetchMovies(this.inputTarget.value)
  }

}
