/*
    MVC Model View Control
    SearchView
    ResultView
    Model
    Controller(searchview,resultview,model)
 */

import SwapiModel from './models/swapi.js';
import SearchView from './views/search-view.js';
import ResultsView from './views/results-view.js';
import SearchController from './controllers/search-controller.js';

//CREATE an instance of the swapimodel
const model = new SwapiModel();

//inside function, this ==undefined
//if you create NEW, "this" is an object

const searchView = new SearchView('#search');
const resultView = new ResultsView('#results');
const searchController = new SearchController(model, searchView, resultView);

console.log(searchController);
