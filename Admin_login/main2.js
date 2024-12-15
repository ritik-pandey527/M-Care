var firebaseConfig = {
    apiKey: "AIzaSyBadAOOf79eHcOdYPUEdh9RjMd15Pp9w98",
    authDomain: "m-care-160f7.firebaseapp.com",
    databaseURL: "https://m-care-160f7-default-rtdb.firebaseio.com",
    projectId: "m-care-160f7",
    storageBucket: "m-care-160f7.appspot.com",
    messagingSenderId: "834489303008",
    appId: "1:834489303008:web:ac53c8e665039091a53585"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference to the bin1 status
  var bin1StatusRef = firebase.database().ref("bins/bin1/status");

  // Update the status on changes
  bin1StatusRef.on("value", function(snapshot) {
    updateBinStatus(snapshot.val());
  }, function (error) {
    console.log("Error: " + error.code);
  });
  function updateBinStatus(status) {
    document.getElementById("bin1Status").innerText = status;
  }