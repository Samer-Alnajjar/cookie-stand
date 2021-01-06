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

var tokyo = new Location("tokyo", 3, 24, 1.2);

var dubai = new Location("dubai", 11, 38, 3.7);

var paris = new Location("paris", 20, 38, 2.3);

var lima = new Location("lima", 2, 16, 4.6);

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
  
  var numOfLocation = [];

  function locationRow(location) {
    numOfLocation.push(location);
    var tableRow = document.createElement("tr");
    table.appendChild(tableRow);

    var header = document.createElement("th");
    header.textContent = location.name;
    tableRow.appendChild(header);

    for(let i = 0; i < 14; i++) {
      var td = document.createElement("td");
      td.textContent = location.results[0][i];
      tableRow.appendChild(td);
    }
    var td = document.createElement("td");
    td.textContent = location.results[1];
    tableRow.appendChild(td);
  }

  locationRow(seattle);
  locationRow(tokyo);
  locationRow(dubai);
  locationRow(paris);
  locationRow(lima);

  function dataRows() {
    var tableRow = document.createElement("tr");
    tableRow.setAttribute("id", "totalRow");
    table.appendChild(tableRow);

    var header = document.createElement("th");
    header.textContent = "Totals";
    tableRow.appendChild(header);

    var totalForAllLocations = 0;
    var sum = 0;
  
    for(let i = 0; i < 14; i++) {
      sum=0;
      for(let j = 0; j < numOfLocation.length; j++) {
        sum = sum + numOfLocation[j].results[0][i];
      }
      totalForAllLocations += sum;
      var td = document.createElement("td");
      td.textContent = sum;
      tableRow.appendChild(td);
    
    }
    var tdTotal = document.createElement("td");
    tdTotal.textContent = totalForAllLocations;
    tableRow.appendChild(tdTotal);
  }

  dataRows();

  function deleteTotal() {
    document.getElementById("totalRow").remove();
  }

  var locationForm = document.getElementById("locationForm");

  locationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var locationName = event.target.location.value;
    var minNumOfCust = event.target.min.value;
    var maxNumOfCust = event.target.max.value;
    var avgNumOfCookies = event.target.avg.value;

    deleteTotal();

    var newLocation = new Location(locationName, minNumOfCust, maxNumOfCust, avgNumOfCookies);

    locationRow(newLocation);

    dataRows();


  })

  


