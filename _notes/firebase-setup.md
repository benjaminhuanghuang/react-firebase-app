## Firebase console

  https://console.firebase.google.com/


## Install Firebase CLI
```
  npm i -g firebase-tools

  firebase login

  firebase projects:list
```

## Install Firebase SDK
```
  npm i -S firebase@7.15.0
```

1. Create Firebase project in Firebase Console
  react-contact-grid

2. Register app
  Project settings -> Add web app ->

3. Copy paste firebase config into a .evn file and rename the fields to REACT_APP_XXXXXX
Add use it like
```
  firebases.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    ...
  })
```
or Copy paste firebase config into a .js file and use it like
```
  firebase.initializeApp(firebaseConfig);
```




