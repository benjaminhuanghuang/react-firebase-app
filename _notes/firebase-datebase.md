# Firebase Database
App need to save user profile seperatly with user auth 

Create database
  
  Cloud Firestore -> Create datebase -> Start in test mode


## Init firebase app using Firebase CLI
```
  npm i -g firebase-tools

  firebase login

  firebase projects:list

  firebase init
  
  > Firestore: Deploy rules and create indexes for Firestore
  > Use an existing project
  > (select project)
  > (select default file name for Firestore rule and index)
```
Firebase CLI creates some files
- .firebaserc
- .firebase.json
- firestore.rules
- firestore.indexes.json

Modify firestore.rules and deploy
```
  firebase deploy --only firestore:rules
```

## Operate the database
firebase/user.js 

Write 
```
  // get a reference to the Firestore document
  const docRef = firestore.doc(`/users/${user.uid}`);

  // write to Cloud Firestore
  return docRef.set(userObj);
```


Read
```
  const docRef = firestore.collection('users').doc(params.id);

  // onSnapshot listen to the real time change
  const unsubscribe = docRef.onSnapshot((doc) => {
```