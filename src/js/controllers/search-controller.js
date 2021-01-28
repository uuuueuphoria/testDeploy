function SearchController(model, searchView, resultsView) {
  this.model = model;
  this.searchView = searchView;
  this.resultsView = resultsView;

  // configUI - this is the initial setup for the controller
  this.configUI = async function () {
    const data = await model.init();
    // pass the data down to the view
    this.resultsView.configUI(data.results[0]);
    // category filter
    const radios = this.searchView.view.querySelectorAll("input[type=radio]");
    radios.forEach((radio) => {
      radio.addEventListener("change", this.onCheckHandler);
    });
  };

  this.onCheckHandler = (e) => {
    console.log(this);
  };

  this.configUI();

  return this;
}

export default SearchController;
