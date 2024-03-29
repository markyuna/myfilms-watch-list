// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import DisableButtonController from "./disable_button_controller"
application.register("disable-button", DisableButtonController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import InitSortableController from "./init_sortable_controller"
application.register("init-sortable", InitSortableController)

import InsertMoviesController from "./insert_movies_controller"
application.register("insert-movies", InsertMoviesController)

import TypedJsController from "./typed_js_controller"
application.register("typed-js", TypedJsController)

import WeatherController from "./weather_controller"
application.register("weather", WeatherController)
