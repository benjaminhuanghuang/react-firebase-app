## Auth with Firebase

## Enable Auth in Firebase
1. Click Authentication
2. Click Sign-in method
3. Enable Email/Pasword


## firebase/auth.js
Calling auth API on firebase.auth()

## User storage in Firebase
Firebase console -> Authentication -> Users

## UI side storage
IndexedDB -> firebaseLocalStorageDB

## Use React Context share user auth state in React App
UserProvider(firebase/UserProvider.js) is top level component of the app

In UserProvider create a state for the current session
```
 const [session, setSession] = useState({...});
```
Use useEffect to listen any Firebase authenticaiton changes
```
  useEffect(() => {}, [])
```

use the data in context in other component
```
  import { useSession } from '../firebase/UserProvider';


  const { user } = useSession();
```

##  Signup

Add signup link in App
```
<Route exact path="/signup" component={Signup} />
```

Add Signup page pages/Signup.js
Signup.js calls the function in auth.js


## Logout
Add logoutUser() function in Header


## Login
Login page(pages/Login.js) calls the function in auth.js



## Router with Auth
High order components (/routers/) for a user session and redirct accordingly.

- ProfileRedirect.js
After user login or signup, "hide" login/signup page and redirect user to profile page.

- PrivateRoute.js
Check user id passed in with the user id in session.



