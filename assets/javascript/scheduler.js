$(document).ready(function () {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAD_htX2gyX3pvOzDbHb37-8oj34tqwNW0",
    authDomain: "kings-cross-193a2.firebaseapp.com",
    databaseURL: "https://kings-cross-193a2.firebaseio.com",
    projectId: "kings-cross-193a2",
    storageBucket: "",
    messagingSenderId: "255143678899"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  $("#currentTime").append(moment().format("HH:mm"));
  
  //Calculate next arrival
  //9am is first train, train comes every seven minutes
  //what if the time is 931am
  //the first train was 31 minutes ago
  //at arrivals on minutes in multiples of 7, the next train is at 9:35, 4 minutes away
  //

  $("#submit").on("click", function (event) {
    //Stops page from refreshing on click of submit
    event.preventDefault();
    //Saves user input to variables
    var name = $("#tNameInput").val().trim();
    var dest = $("#tDestInput").val().trim();
    var first = $("#tFirstInput").val().trim();
    var freq = $("#tFreqInput").val().trim();
    //Pushes these variables to firebase
    database.ref().push({
      name: name,
      dest: dest,
      first: first,
      freq: freq,
      next:next;
    });
  });


  database.ref().on("child_added", function (snapshot) {
    var snap = snapshot.val();

    var trainName = snap.name;
    var trainDest = snap.dest;
    var trainFirst = snap.first;
    var trainFreq = snap.freq;



    
    
    

    //Creates new row for each user entry and appends to table data from firebase
    var newRow = $("<tr>").append($("<td>").text(trainName), $("<td>").text(trainDest), $("<td>").text(trainFirst), $("<td>").text(trainFreq), $("<td>").text(trainNext));
    $(".trains").append(newRow);
  })
})