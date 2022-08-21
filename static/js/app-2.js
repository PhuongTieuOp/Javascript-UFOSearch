//-- ============================================================================= 
//-- Home Work, Module14-Javascript, d3 
//-- Section:   UFO level 2
//-- Date:      8-8-2022 
//-- ============================================================================= 

// 1. Setup/get data =======================================================
// Load data source from data.js into a constant
const tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

// Loop Through `data` and log each UFO sighting 
data.forEach(function(ufoSighting) {
  console.log(ufoSighting);
});

// 2. Define functions ==================================================
// Populate/display table body using the parameter data
function populateTbody(paramData){
    paramData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });      
}

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  var inputDate   = d3.select("#datetime").property("value");
  var inputCity   = d3.select("#citycode").property("value").toLowerCase();
  var inputState  = d3.select("#statecode").property("value").toLowerCase();
  var inputCountry = d3.select("#countrycode").property("value").toLowerCase();
  var inputShape  = d3.select("#shape").property("value").toLowerCase();
        
  console.log('input date: ' + inputDate);  
  console.log('input city: ' + inputCity);       
  console.log('input state: ' + inputState);  
  console.log('input country: ' + inputCountry);         
  console.log('input shape: ' + inputShape);  

  // Check and filter inputdata
  var filteredData = tableData;   // If no input entered, all UFO sightings will display  
  if (inputDate != "") {
      filteredData = filteredData.filter(ufoObject => ufoObject.datetime === inputDate);
      }

  if (inputCity != "") {
      filteredData = filteredData.filter(ufoObject => ufoObject.city.toLowerCase().includes(inputCity));
      } 

  if (inputState != "") {
      filteredData = filteredData.filter(ufoObject => ufoObject.state.toLowerCase().includes(inputState));
      }

  if (inputCountry != "") {
      filteredData = filteredData.filter(ufoObject => ufoObject.country.toLowerCase().includes(inputCountry));
      } 

  if (inputShape != "") {
      filteredData = filteredData.filter(ufoObject => ufoObject.shape.toLowerCase().includes(inputShape));
      } 
  
  console.log(filteredData);  

  // Clear tbody display before populating  
  tbody.html("");
  populateTbody(filteredData);
}   // end of runEnter

// 3. Event handlers and logic flows =========================================
//
// Select the button using its id
var button = d3.select("#filter-btn");

// Create event handler 
button.on("click", runEnter);

// When js script first time called, display all UFO sightings by default
populateTbody(tableData);