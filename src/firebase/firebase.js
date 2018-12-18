import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC3kw4l_92aLupxqHaKN-JOYd94kQajUNk",
    authDomain: "expensify-36277.firebaseapp.com",
    databaseURL: "https://expensify-36277.firebaseio.com",
    projectId: "expensify-36277",
    storageBucket: "expensify-36277.appspot.com",
    messagingSenderId: "942308735868"
  };

  
  firebase.initializeApp(config);

  const database = firebase.database();
  
//   database.ref().set({
//       name: 'Shahrooz Jafari',
//       age: 41,
//       isSingle: false,
//       location:{
//           city:'Perth',
//           country: 'Australia'
//       }
//   }).then(()=>{
//     console.log('Database Updated');
//   }).catch((e)=>{
//     console.log('Error massage: ', e);
//   });

//   database.ref('age').set(42);
//   database.ref('location/city').set('Success');

//   database.ref('attributes').set({
//       height: 176,
//       weight: 105
//   }).then(()=>{
//     console.log('Second action done');
//   }).catch((e)=>{
//     console.log('Second Error massage: ', e);
//   });
  

//Remove From Database
// database.ref('isSingle')
// .remove()
// .then(()=>{
//     console.log('Data Removed Successfully');
// })
// .catch((e)=>{
//     console.log('Error: ',e)
// });

//Update database
// database.ref().update({
//     name: 'Fershteh',
//     age : 40,
//     job: 'Accountant',
//     'location/city': 'Fremantle'
// }).then(()=>{
//     console.log('Database Updated');
// }).catch((e)=>{
//     console.log('Error massage: ', e);
// });

//fetch data by once
// database.ref('location')
// .once('value')
// .then((snapshot)=>{
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e)=>{
//      console.log('Error massage: ', e);
// });

// fetch data by subscription
database.ref('location')
.on('value', (snapshot)=>{
    console.log(snapshot.val());
}, (e) => {
    console.log('error fetching data', e);
}) ;

// off subscription
//database.ref.off();