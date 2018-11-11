// Steps to complete:

// 1. Initialize Firebase
// 2. Create button for adding new trains - then update the html + update the database
// 3. Create a way to retrieve trains from the train database.
// 4. Create a way to calculate the time. Using difference between start and current time.
//    Then use moment.js formatting 


// 1. Initialize Firebase


var config = {
    apiKey: "AIzaSyBcmNEmTDV6MoaOCghNPRaV8ybYXGWooZA",
    authDomain: "train-activity-fb6fd.firebaseapp.com",
    databaseURL: "https://train-activity-fb6fd.firebaseio.com",
    projectId: "train-activity-fb6fd",
    storageBucket: "train-activity-fb6fd.appspot.com",
    messagingSenderId: "781267644644"

  };

  firebase.initializeApp(config);

  //var currentTime= moment().format();

  $("#click-button").on("click", function(event){
      event.preventDefault();
    var trainName =$("#trainNameForm").val().trim();
    var destinationForm =$("#destinationForm").val().trim();
    var trainTimeForm = moment($("#trainTimeForm").val());
    var frequencyForm = $("#frequencyForm").val();

  var newTrain={
      trainNameObject: trainName,
      destiantionObject: destinationForm,
  }


firebase.database().ref().push(newTrain)

  })

  // Grabs user input

   var trainName =$("#trainNameForm").val().trim();
   var destinationForm =$("#destinationForm").val().trim();
  // var trainTimeForm = moment($("#trainTimeForm").val().trim(), "HH:mm").format("HH:mm");
   var frequencyForm =$("#frequencyNameForm").val().trim();

  

  firebase.database().ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
    var newRow = $("<tr>").append(
      $('<td>').text(childSnapshot.val().trainNameObject),
      $('<td>').text(childSnapshot.val().destiantionObject),
      //$('<td>').text(childSnapshot.val()trainTimeForm),
      $('<td>').text(childSnapshot.val().frequencyForm),
      
    );
  
    $('#trainScheduleTable > tbody').append(newRow);
  }) 


  