import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase-config";

const firebaseInitializer = () => {
    initializeApp(firebaseConfig);
};
export default firebaseInitializer;

/*steps for authentication 
Initial Setup:
1.firebase-create project
2.create web app
3.get configuration
4.initialize firebase
5.enable auth method


*/
