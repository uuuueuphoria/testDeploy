function SearchView(viewId) {
  //pass in the id view
  this.view = document.querySelector(viewId);

  this.configUI = function () {
    console.log('Search View Config');
  };

  this.updateLabel = function (label) {
    //update the label when the radio button changes
  };

  return this;
}

export default SearchView;
