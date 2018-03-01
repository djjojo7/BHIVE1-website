(function(){

  // Initialize firebase
  const config = {
    apiKey: "AIzaSyDHOTc1CbQdSRr4dDRmi7KuUYh11rCCxFg",
    authDomain: "beehive-monitor-team-1.firebaseapp.com",
    databaseURL: "https://beehive-monitor-team-1.firebaseio.com",
    projectId: "beehive-monitor-team-1",
    storageBucket: "beehive-monitor-team-1.appspot.com",
    messagingSenderId: "211009618221"
  };
  firebase.initializeApp(config);

  // Get elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');

//Add login event
btnLogin.addEventListener('click', e => {
  //Get email and password
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  //Sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});

  //Add signup event
  btnSignUp.addEventListener('click', e => {
    // TODO: CHECK 4 REAL EMAIL
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  //Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      btnLogout.classList.remove('hide');
    } else{
      console.log('not logged in');
      btnLogout.classList.add('hide');
    }
  });

}());
