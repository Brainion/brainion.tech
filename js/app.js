function saveToFirebase() {
  const data = document.getElementById('mail').elements[0].value;

  if (ValidateEmail(data)) {
    database
      .ref('emails')
      .push({ email: data })
      .then(
        function (snapshot) {
          pass();
        },
        function (error) {
          console.log('error' + error);
          fail();
        }
      );
    document.getElementById('mail').reset();
  }
}

function ValidateEmail(mail) {
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
    pass();
    return true;
  } else {
    fail();
    return false;
  }
}

function fail() {
  $('#fail').finish().show().delay(1000).fadeOut(6000);
}
function pass() {
  $('#succ').finish().show().delay(1000).fadeOut(6000);
}
