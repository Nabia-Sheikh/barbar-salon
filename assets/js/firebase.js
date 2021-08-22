var names = document.getElementById("names");
var email = document.getElementById("emails");
var subject = document.getElementById("subjects");
var message = document.getElementById("messages");
var submit = document.getElementById("submit");

var dbRef = firebase.database();
console.log(firebase.database);
submit.addEventListener("click", () => {
  var obj = {
    name: names.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  console.log(obj);

  dbRef.ref("Data").push(obj, () => {
    document.getElementById("changeData").innerHTML =
      "<h2 class='heading--title'> Your Response has been recorded.</h2>";

  });
});
