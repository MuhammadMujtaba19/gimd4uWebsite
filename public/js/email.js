var firebaseConfig = {

  apiKey: "AIzaSyCBa0QBEbH0BebdBPWDZX5QdckxPijtSF8",
  authDomain: "gimd4u-3b723.firebaseapp.com",
  databaseURL: "https://gimd4u-3b723.firebaseio.com",
  projectId: "gimd4u-3b723",
  storageBucket: "",
  messagingSenderId: "997702665140",
  appId: "1:997702665140:web:1de0e4b81363c1ff"
};
firebase.initializeApp(firebaseConfig);

var messageRef= firebase.database().ref('request');
messageRef.on('value',gotdata,errdata);

function gotdata(data){
  console.log(data.val());
}
function errdata(err){
  console.log("error");
}

document.getElementById('contactForm').addEventListener('submit',submitForm);
function submitForm(e){
    e.preventDefault();
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('subject');
    saveMessage(name,email,phone,message); 
}
 


//function to get form values 
function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name, email,phone,message ){
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name:name,
    email:email,
    phone:phone,
    message:message
  });
}

