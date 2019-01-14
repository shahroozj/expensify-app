import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  }; 
  
  firebase.initializeApp(config);

  const database = firebase.database();

  export {firebase, database as default};

  // //child_removed
  // database.ref('expenses').on('child_removed', (snapshot)=>{
  //   console.log(snapshot.key, snapshot.val());
  // });

  // //child_changed
  // database.ref('expenses').on('child_changed', (snapshot)=>{
  //   console.log(snapshot.key, snapshot.val());
  // });

  // //child_added
  // database.ref('expenses').on('child_added', (snapshot)=>{
  //   console.log(snapshot.key, snapshot.val());
  // });


//   database.ref('expenses')
//     .once('value')
//     .then((snapshot)=>{
//         const expenses = [];
//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses')
//     .on('value', (snapshot)=>{
//         const expenses = [];
//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

  
//   database.ref('expenses').push({
//     description: 'Car Fuel',
//     note: '',
//     amount: '4395',
//     createdAt: '0'
//   });


  //Add array to database
//   database.ref('notes').push({
//     title: 'Course Names',
//     description: 'Javascript, React, Firebase'
//   });
  
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
// database.ref('location')
// .on('value', (snapshot)=>{
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('error fetching data', e);
// }) ;

// off subscription
//database.ref.off();