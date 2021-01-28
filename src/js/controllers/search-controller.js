function SearchController(model, searchView, resultsView) {
  this.model = model;
  this.searchView = searchView;
  this.resultsView = resultsView;
  this.category = 'people';

  // configUI - this is the initial setup for the controller
  this.configUI = async function () {
    this.searchView.view.addEventListener('submit', this.onHandleSubmit);
    const data = await model.init();
    // pass the data down to the view
    this.resultsView.configUI(data.results[0]);
    // category filter
    const radios = this.searchView.view.querySelectorAll('input[type=radio]');
    radios.forEach((radio) => {
      radio.addEventListener('change', this.onCheckHandler);
    });
  };

  this.onCheckHandler = (e) => {
    this.category = e.currentTarget.value;
    this.searchView.updateLabel(this.category);
  };

  this.onHandleSubmit = async (e) => {
    //key this
    e.preventDefault();

    //no validation this time
    //this form name values
    const queryParams = {
      category: this.category,
      name: e.currentTarget.searchTerm.value,
    };
    //await cannot use outside definition
    const searchResponse = await this.model.search(queryParams);
    resultsView.renderPeople(searchResponse);
  };

  this.configUI();

  return this;
}

export default SearchController;
