
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confin";

const initializeAuthentication=()=>{
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;