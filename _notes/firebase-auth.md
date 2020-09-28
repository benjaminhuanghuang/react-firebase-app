

## Use firebase Auth
1. Click Authentication
2. Click Sign-in method
3. Enable Email/Pasword




## firebase/auth.js
Calling auth API on firebase.auth()


## pages/Signup.js
Signup.js is the UI for Auth which calls the function in auth.js

## User storage
Firebase console -> Authentication -> Users



## firebase/UserProvider.js
Use React Context to share current authenticated session in whole app

UserProvider is top level component of the app

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
```

## Add signup link in App
```
<Route exact path="/signup" component={Signup} />
```