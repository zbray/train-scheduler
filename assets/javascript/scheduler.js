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

  $("#submit").on("click", function (event) {
    event.preventDefault();

    var name = $("#tNameInput").val().trim();
    var dest = $("#tDestInput").val().trim();
    var first = $("#tFirstInput").val().trim();
    var freq = $("#tFreqInput").val().trim();

    database.ref().push({
      name: name,
      dest: dest,
      first: first,
      freq: freq,
    });
  });

  database.ref().on("child_added", function (snapshot) {
    var snap = snapshot.val();
    console.log(snap.name);
    console.log(snap.dest);
    console.log(snap.first);
    console.log(snap.freq);

    var trainName = snap.name;
    var trainDest = snap.dest;
    var trainFirst = snap.first;
    var trainFreq = snap.freq;

    var newRow = $("<tr>").append($("<td>").text(trainName), $("<td>").text(trainDest), $("<td>").text(trainFirst), $("<td>").text(trainFreq));


    $(".trains").append(newRow);
  })
})