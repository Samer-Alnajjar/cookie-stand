var body = document.getElementsByTagName("body")[0];

// var seattle = document.createElement("h1");
// seattle.textContent = "Seattle";

// body.append(seattle);

// var ul = document.createElement("ul");
// body.append(ul);

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


// creatingUl(seattle);

// var tokyo = document.createElement("h1");
// tokyo.textContent = "Tokyo";

// body.append(tokyo);

// var ul = document.createElement("ul");
// body.append(ul);

//creating a tokyo object from constructor

var tokyo = new Location("tokyo", 3, 24, 1.2);

// creatingUl(tokyo);

// var dubai = document.createElement("h1");
// dubai.textContent = "Dubai";

// body.append(dubai);

// var ul = document.createElement("ul");
// body.append(ul);

//creating a dubai object from constructor

var dubai = new Location("dubai", 11, 38, 3.7);

// creatingUl(dubai);

// var paris = document.createElement("h1");
// paris.textContent = "Paris";

// body.append(paris);

// var ul = document.createElement("ul");
// body.append(ul);

//creating a paris object from constructor

var paris = new Location("paris", 20, 38, 2.3);

// creatingUl(paris);

// var lima = document.createElement("h1");
// lima.textContent = "Lima";

// body.append(lima);

// var ul = document.createElement("ul");
// body.append(ul);

//creating a lima object from constructor

var lima = new Location("lima", 2, 16, 4.6);

// creatingUl(lima);


// function creatingUl(location) {

//   for(let i = 0; i < 14; i++) {    
//     if(i+6 < 12) {
//     var li = document.createElement("li");
//     li.textContent = i+6 + "am:" + location.results[0][i] + " cookies"
//     ul.append(li)
//     }else if(i+6 === 12) {
//       var li = document.createElement("li");
//       li.textContent = i+6 + "pm:" + location.results[0][i] + " cookies"
//       ul.append(li)
//     }else if(i+6 > 12) {
//       var li = document.createElement("li");
//       li.textContent = i-6 + "pm:" + location.results[0][i] + " cookies"
//       ul.append(li);
//     }
// }
//   var li = document.createElement("li");
//   li.textContent = "Total: "+ location.results[1] + " cookies"
//   ul.append(li)
// }

//Creating a table using DOM

var title = document.createElement("h1");
title.textContent = "Sales data";
title.setAttribute("class", "sales");
body.appendChild(title);

var table = document.createElement("table");
body.appendChild(table);

function timeRow() {
  var tableRow = document.createElement("tr");
  table.appendChild(tableRow);

  var header = document.createElement("th");
  header.textContent = "";
  tableRow.appendChild(header);

    for(let i = 0; i < 14; i++) {
      if(i+6 < 12) {
        var headerFirst = document.createElement("th");
        headerFirst.textContent = i+6+":00am";
        tableRow.appendChild(headerFirst);
      }else if(i+6 === 12) {
        var headerFirst = document.createElement("th");
        headerFirst.textContent = i+6+":00pm";
        tableRow.appendChild(headerFirst);
      }else if(i+6 > 12) {
        var headerFirst = document.createElement("th");
        headerFirst.textContent = i-6+":00pm";
        tableRow.appendChild(headerFirst);
      }
    }
    var header = document.createElement("th");
  header.textContent = "Daily Location Total";
  tableRow.appendChild(header);
  }

  timeRow();

  function seattleRow() {
    var tableRow = document.createElement("tr");
    table.appendChild(tableRow);

    var header = document.createElement("th");
    header.textContent = "Seattle";
    tableRow.appendChild(header);

    for(let i = 0; i < 14; i++) {
      var td = document.createElement("td");
      td.textContent = seattle.results[0][i];
      tableRow.appendChild(td);
    }
    var td = document.createElement("td");
    td.textContent = seattle.results[1];
    tableRow.appendChild(td);
  }

  seattleRow();

  function tokyoRow() {
    var tableRow = document.createElement("tr");
    table.appendChild(tableRow);

    var header = document.createElement("th");
    header.textContent = "Tokyo";
    tableRow.appendChild(header);

    for(let i = 0; i < 14; i++) {
      var td = document.createElement("td");
      td.textContent = tokyo.results[0][i];
      tableRow.appendChild(td);
    }
    var td = document.createElement("td");
    td.textContent = tokyo.results[1];
    tableRow.appendChild(td);
  }

  tokyoRow();

  function dubaiRow() {
    var tableRow = document.createElement("tr");
    table.appendChild(tableRow);

    var header = document.createElement("th");
    header.textContent = "Dubai";
    tableRow.appendChild(header);

    for(let i = 0; i < 14; i++) {
      var td = document.createElement("td");
      td.textContent = dubai.results[0][i];
      tableRow.appendChild(td);
    }
    var td = document.createElement("td");
    td.textContent = dubai.results[1];
    tableRow.appendChild(td);
  }

  dubaiRow();

  function parisRow() {
    var tableRow = document.createElement("tr");
    table.appendChild(tableRow);

    var header = document.createElement("th");
    header.textContent = "Paris";
    tableRow.appendChild(header);

    for(let i = 0; i < 14; i++) {
      var td = document.createElement("td");
      td.textContent = paris.results[0][i];
      tableRow.appendChild(td);
    }
    var td = document.createElement("td");
    td.textContent = paris.results[1];
    tableRow.appendChild(td);
  }

  parisRow();

  function limaRow() {
    var tableRow = document.createElement("tr");
    table.appendChild(tableRow);

    var header = document.createElement("th");
    header.textContent = "Lima";
    tableRow.appendChild(header);

    for(let i = 0; i < 14; i++) {
      var td = document.createElement("td");
      td.textContent = lima.results[0][i];
      tableRow.appendChild(td);
    }
    var td = document.createElement("td");
    td.textContent = lima.results[1];
    tableRow.appendChild(td);
  }

  limaRow();

  function totalsRow() {
    var tableRow = document.createElement("tr");
    table.appendChild(tableRow);

    var header = document.createElement("th");
    header.textContent = "Totals";
    tableRow.appendChild(header);

    var sum = 0;
    var totalForAllLocations = 0;

    for(let i = 0; i < 14; i++) {
      var td = document.createElement("td");
      sum = seattle.results[0][i] + tokyo.results[0][i] + dubai.results[0][i] + paris.results[0][i] + lima.results[0][i]; 
      td.textContent = sum;
      tableRow.appendChild(td);
      totalForAllLocations += sum;
    }
    var td = document.createElement("td");
    td.textContent = totalForAllLocations;
    tableRow.appendChild(td);
  }

  totalsRow();