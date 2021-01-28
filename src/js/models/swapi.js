/* 
swap base url: 'https://swapi.dev/api/'

initial query people?search=luke'

*/

function SwapiModel() {
  this.apiBaseURL = 'https://swapi.dev/api/';

  //init function is called by the searchController to init the UI of the resultView

  this.init = function () {
    const result = this.query('https://swapi.dev/api/people?search=luke');
    return result;
  };
  this.query = async function (url) {
    //replace .then method
    const req = await fetch(url);
    const res = await req.json();
    return res;
  };

  //method
  this.sayHello = function () {
    console.log('say Hello');
    console.log(this);
  };

  this.sayGoodBye = () => {
    console.log('say GoodBye');
    console.log(this);
  };
  document.body.addEventListener('click', (e) => {
    //arrow function does not keep the context of this, this is the global
    //regular function, this is local
    console.log(this);
  });

  return this;
}

export default SwapiModel;
