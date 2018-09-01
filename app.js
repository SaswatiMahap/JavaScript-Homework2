// Assigning the data from `data.js` to a descriptive variable
var ufo = data;

// Here is my code 

// Select the submit button
var submit = d3.select("#filter-btn");


submit.on("click", function() {

 
    // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  //console.log(ufo);

  var filteredData = ufo.filter(ufo => ufo.datetime === inputValue);
  console.log(filteredData);

  var tbody = d3.select("tbody");
  filteredData.forEach((filteredData) => {
    var row = tbody.append("tr");
    Object.entries(filteredData).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
  

});

