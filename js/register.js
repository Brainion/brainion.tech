var firebaseConfig = {
  apiKey: 'AIzaSyAv27nYVGI3JIu5jl9j5eqD2gBM8zwOf4c',
  authDomain: 'brainion-tech.firebaseapp.com',
  databaseURL:
    'https://brainion-tech-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'brainion-tech',
  storageBucket: 'brainion-tech.appspot.com',
  messagingSenderId: '133629695988',
  appId: '1:133629695988:web:2eaff3769a6fe1daddcba1',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const button = document.querySelector('button')
button.disabled = true

//Reference for form collection(3)
let formMessage = firebase.database().ref('register');

//listen for submit event//(1)
document
  .getElementById('registrationform')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let number = document.querySelector('#number').value;
  let date = document.querySelector('#date').value;
  let topic = document.querySelector('#topic').value;
  let interest = document.querySelector('#interest').value;

  //send message values
  sendMessage(name, email, number, date, topic, interest);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('registrationform').reset();
}

//Send Message to Firebase(4)

function sendMessage(name, email, number, date, topic, interest) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    Name: name,
    Email: email,
    Wp_number: number,
    Date: date,
    Topic: topic,
    Interest: interest,
  });
}
