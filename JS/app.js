var body = document.getElementsByTagName("body")[0];

var seattle = document.createElement("h1");
seattle.textContent = "Seattle";

body.append(seattle);

var ul = document.createElement("ul");
body.append(ul);

function randNumberOfCustomer (min, max) {
  var min = Math.ceil(min);
  var max = Math.floor(max);
  var results = Math.floor(Math.random() * (max - min + 1) + min);
  return results;
   //The maximum is inclusive and the minimum is inclusive
}

function numberOfCookiesSoldPerHour (avgNoOfCookiesPerCustomer, min, max) {
  var arrayOfHours = [];
  var sum = 0;
  for(let i = 0; i < 14; i++) {
    var NumberOfCustomers = randNumberOfCustomer(min, max);
    var numberOfCookies = (NumberOfCustomers * avgNoOfCookiesPerCustomer);
    arrayOfHours[i] = parseInt(numberOfCookies);
    sum+=numberOfCookies;
  }
  return [arrayOfHours, sum];
}

//Declaring the constructor

function Location(passedName, passedMin, passedMax, passedAvg) {
  this.name = passedName;
  this.minNoOfCustomer = passedMin;
  this.maxNoOfCustomer = passedMax;
  this.avgNoOfCookiesPerCustomer = passedAvg;
  this.results = [];
  this.array = this.results.push(numberOfCookiesSoldPerHour(this.avgNoOfCookiesPerCustomer, this.minNoOfCustomer, this.maxNoOfCustomer)[0]);
  this.total = this.results[1] = parseInt(numberOfCookiesSoldPerHour(this.avgNoOfCookiesPerCustomer, this.minNoOfCustomer, this.maxNoOfCustomer)[1])
}

//creating a seatlle object from constructor

var seattle = new Location("seattle", 23, 65, 6.3);


creatingUl(seattle);

var tokyo = document.createElement("h1");
tokyo.textContent = "Tokyo";

body.append(tokyo);

var ul = document.createElement("ul");
body.append(ul);

//creating a tokyo object from constructor

var tokyo = new Location("tokyo", 3, 24, 1.2);

creatingUl(tokyo);

var dubai = document.createElement("h1");
dubai.textContent = "Dubai";

body.append(dubai);

var ul = document.createElement("ul");
body.append(ul);

//creating a dubai object from constructor

var dubai = new Location("dubai", 11, 38, 3.7);

creatingUl(dubai);

var paris = document.createElement("h1");
paris.textContent = "Paris";

body.append(paris);

var ul = document.createElement("ul");
body.append(ul);

//creating a paris object from constructor

var paris = new Location("paris", 20, 38, 2.3);

creatingUl(paris);

var lima = document.createElement("h1");
lima.textContent = "Lima";

body.append(lima);

var ul = document.createElement("ul");
body.append(ul);

//creating a lima object from constructor

var lima = new Location("lima", 2, 16, 4.6);

creatingUl(lima);


function creatingUl(location) {

  for(let i = 0; i < 14; i++) {    
    if(i+6 < 12) {
    var li = document.createElement("li");
    li.textContent = i+6 + "am:" + location.results[0][i] + " cookies"
    ul.append(li)
    }else if(i+6 === 12) {
      var li = document.createElement("li");
      li.textContent = i+6 + "pm:" + location.results[0][i] + " cookies"
      ul.append(li)
    }else if(i+6 > 12) {
      var li = document.createElement("li");
      li.textContent = i-6 + "pm:" + location.results[0][i] + " cookies"
      ul.append(li);
    }
}
var li = document.createElement("li");
    li.textContent = "Total: "+ location.results[1] + " cookies"
    ul.append(li)
}

