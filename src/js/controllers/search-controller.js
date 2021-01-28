function SearchController(model, searchView, resultsView) {
  this.model = model;
  this.searchView = searchView;
  this.resultsView = resultsView;

  //configUI this is the initial setup for the controller
  this.configUI = async function () {
    const data = await model.init(); //return a promise
    //pass the data to the view
    console.log(data);
    this.resultsView.configUI(data.results[0]);
    //category filter
    const radios = this.searchView.view.querySelectorAll('input[type=radio]'); //get a nodelist, foreach
    radios.forEach((radio) => {
      radio.addEventListener('change', this.onCheckedHandler);
    });
  };

  this.onCheckedHandler = (e) => {
    console.log(this);
  };
  this.configUI();

  return this;
}

export default SearchController;
