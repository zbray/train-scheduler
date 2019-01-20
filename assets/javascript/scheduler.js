$(document).ready(function () {
  //Firebase link
  var config = {
    apiKey: "AIzaSyB94MDRa_FidgxXBlhuHYgYiCwK5Mk1Hvk",
    authDomain: "train-scheduler-6b333.firebaseapp.com",
    databaseURL: "https://train-scheduler-6b333.firebaseio.com",
    projectId: "train-scheduler-6b333",
    storageBucket: "train-scheduler-6b333.appspot.com",
    messagingSenderId: "1056796114865"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("submit").on("click", function() {
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

  database.ref().on("child_added", function (snapshot){
    var snap = snapshot.val();
    console.log(snap.name);
    console.log(snap.dest);
    console.log(snap.first);
    console.log(snap.freq);

    var trainName = snap.name;
    var trainDest = snap.dest;
    var tra
  })

})