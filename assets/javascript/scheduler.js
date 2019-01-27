$(document).ready(function () {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAD_htX2gyX3pvOzDbHb37-8oj34tqwNW0",
    authDomain: "kings-cross-193a2.firebaseapp.com",
    databaseURL: "https://kings-cross-193a2.firebaseio.com",
    projectId: "kings-cross-193a2",
    storageBucket: "kings-cross-193a2.appspot.com",
    messagingSenderId: "255143678899"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  //Display Current Time under name of user's current trainstation
  $("#currentTime").append(moment().format("HH:mm"));

  $("#submit").on("click", function (event) {
    //Stops page from refreshing on click of submit
    event.preventDefault();
    //Saves user input to variables
    var name = $("#tNameInput").val().trim();
    var dest = $("#tDestInput").val().trim();
    var first = moment($("#tFirstInput").val().trim(), "HH:mm").subtract(1, "years");
    var freq = $("#tFreqInput").val().trim();

    //Pushes these variables to firebase
    database.ref().push({
      name: name,
      dest: dest,
      first: first,
      freq: freq,
    });

    //Clears fields after firebase receives their text values
    $("#tNameInput").val("");
    $("#tDestInput").val("");
    $("#tFirstInput").val("");
    $("#tFreqInput").val("");
  });

  database.ref().on("child_added", function (snapshot) {
    var data = snapshot.val();
    var trainName = data.name;
    var trainDest = data.dest;
    var trainFirst = data.first;
    var trainFreq = data.freq;

    //Calculate How Many Minutes until next train
    var trainRemainder = moment().diff(moment.unix(trainFirst), "minutes") % trainFreq;
    var trainMinutes = trainFreq - trainRemainder;

    // Calculate Next Arrival Time
    var nextTrain = moment().add(trainMinutes, "m").format("hh:mm A");

    //Creates new row for each user entry and appends to table data from firebase
    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(trainDest),
      $("<td>").text("every " + trainFreq + " minutes"),
      $("<td>").text(trainMinutes + " minutes"),
      $("<td>").text(nextTrain)
    );

    //Places all new data onto train board
    $(".trains").append(newRow);
  })
})