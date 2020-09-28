# Firebase Storage
Storage -> Get Start


## Init firebase app using Firebase CLI
```
  npm i -g firebase-tools

  firebase login

  firebase projects:list

  firebase init
  
  > Storage: Deploy Cloud Storage security rules
  > Use an existing project
  > (select project)
  > (select default file name for Firestore rule and index)
```
Firebase CLI update firebase.json and creates storage.rules


Modify storage.rules and deploy
```
  firebase deploy --only storage:rules
```


## ProflieImage.js for image uploading.
