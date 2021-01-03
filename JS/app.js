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


var seattle = {
  minNoOfCustomer: 23,
  maxNoOfCustomer: 65,
  avgNoOfCookiesPerCustomer: 6.3,
  results: []
} 
seattle.results.push(numberOfCookiesSoldPerHour(seattle.avgNoOfCookiesPerCustomer, seattle.minNoOfCustomer, seattle.maxNoOfCustomer)[0]);
seattle.results[1] = parseInt(numberOfCookiesSoldPerHour(seattle.avgNoOfCookiesPerCustomer, seattle.minNoOfCustomer, seattle.maxNoOfCustomer)[1])
console.log(seattle.results[0]);
// console.log(seattle.results[1]); //To find the sum

creatingUl(seattle);

var tokyo = document.createElement("h1");
tokyo.textContent = "Tokyo";

body.append(tokyo);

var ul = document.createElement("ul");
body.append(ul);

var tokyo = {
  minNoOfCustomer: 3,
  maxNoOfCustomer: 24,
  avgNoOfCookiesPerCustomer: 1.2,
  results: []
}
tokyo.results.push(numberOfCookiesSoldPerHour(tokyo.avgNoOfCookiesPerCustomer, tokyo.minNoOfCustomer, tokyo.maxNoOfCustomer)[0]);
tokyo.results[1] = parseInt(numberOfCookiesSoldPerHour(tokyo.avgNoOfCookiesPerCustomer, tokyo.minNoOfCustomer, tokyo.maxNoOfCustomer)[1])
// console.log(tokyo.results[0]);

creatingUl(tokyo);

var dubai = document.createElement("h1");
dubai.textContent = "dubai";

body.append(dubai);

var ul = document.createElement("ul");
body.append(ul);

var dubai = {
  minNoOfCustomer: 11,
  maxNoOfCustomer: 38,
  avgNoOfCookiesPerCustomer: 3.7,
  results: []
}
dubai.results.push(numberOfCookiesSoldPerHour(dubai.avgNoOfCookiesPerCustomer, dubai.minNoOfCustomer, dubai.maxNoOfCustomer)[0]);
dubai.results[1] = parseInt(numberOfCookiesSoldPerHour(dubai.avgNoOfCookiesPerCustomer, dubai.minNoOfCustomer, dubai.maxNoOfCustomer)[1])
// console.log(dubai.results[0]);

creatingUl(dubai);

var paris = document.createElement("h1");
paris.textContent = "paris";

body.append(paris);

var ul = document.createElement("ul");
body.append(ul);

var paris = {
  minNoOfCustomer: 20,
  maxNoOfCustomer: 38,
  avgNoOfCookiesPerCustomer: 2.3,
  results: []
}
paris.results.push(numberOfCookiesSoldPerHour(paris.avgNoOfCookiesPerCustomer, paris.minNoOfCustomer, paris.maxNoOfCustomer)[0]);
paris.results[1] = parseInt(numberOfCookiesSoldPerHour(paris.avgNoOfCookiesPerCustomer, paris.minNoOfCustomer, paris.maxNoOfCustomer)[1])
// console.log(paris.results[0]);

creatingUl(paris);

var lima = document.createElement("h1");
lima.textContent = "lima";

body.append(lima);

var ul = document.createElement("ul");
body.append(ul);


var lima = {
  minNoOfCustomer: 2,
  maxNoOfCustomer: 16,
  avgNoOfCookiesPerCustomer: 4.6,
  results: []
}
lima.results.push(numberOfCookiesSoldPerHour(lima.avgNoOfCookiesPerCustomer, lima.minNoOfCustomer, lima.maxNoOfCustomer)[0]);
lima.results[1] = parseInt(numberOfCookiesSoldPerHour(lima.avgNoOfCookiesPerCustomer, lima.minNoOfCustomer, lima.maxNoOfCustomer)[1])
// console.log(lima.results[0]);

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
    li.textContent = "Total: "+ location.results[1]
    ul.append(li)
}

