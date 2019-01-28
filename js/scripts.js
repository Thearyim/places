$(document).ready(function() {
  $("#mountsi").click(function() {
    document.write("<p>The trail name is: " + trail1.trailName + " The distance is: " + trail1.distance + " The elevation gain is: " + trail1.elevationGain + "</p>" + "<a href=index.html>Go Back</a>")
  });
  $("#rattlesnake").click(function() {
    document.write("<p>The trail name is: " + trail2.trailName + " The distance is: " + trail2.distance + " The elevation gain is: " + trail2.elevationGain + "</p>" + "<a href=index.html>Go Back</a>")
  });
  $("#poopoo").click(function() {
    document.write("<p>The trail name is: " + trail3.trailName + " The distance is: " + trail3.distance + " The elevation gain is: " + trail3.elevationGain + "</p>" + "<a href=index.html>Go Back</a>")
  });
  $("#mailbox").click(function() {
    document.write("<p>The trail name is: " + trail4.trailName + " The distance is: " + trail4.distance + " The elevation gain is: " + trail4.elevationGain + "</p>" + "<a href=index.html>Go Back</a>")
  });

function Hiking (trailName, distance, elevationGain) {
  this.trailName = trailName;
  this.distance = distance;
  this.elevationGain = elevationGain;
}

var trail1 = new Hiking("Mount Si", "8 miles", "4,167 feet")
var trail2 = new Hiking("Rattle Snake", "3.8 miles", "300 feet")
var trail3 = new Hiking("Poo Poo Point", "7.2 miles", "1858 feet")
var trail4 = new Hiking("Mailbox", "9.4 miles", "4000 feet")
});
