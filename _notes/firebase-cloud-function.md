


## Init firebase app using Firebase CLI
```
  npm i -g firebase-tools

  firebase login

  firebase projects:list

  firebase init functions
  
```

Firebase CLI create a fundtions folder


Set evn variables for firebase function
```
  firebase functions:config:set gmail.email="b3n@gmai.com"  gmail.password="1234"
```
Read env variagles
```
// env vars
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
```

Install sdk for email sending
```
   cd functions
   npm i nodemailer
```

Trigger
```
exports.sendWelcomeEmail = functions.auth.user().onCreate
```

Deploy the cloud function
```
  cd functions

  npm run deploy
```