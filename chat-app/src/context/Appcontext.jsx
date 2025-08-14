import { createContext, useState , userRef, userSnap} from "react";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
export const Appcontext= createContext();
const Appcontextprovider=(props) =>
{

    const  [userdata, setuserdata]= useState(null);
    const[chatdata, setchatdata]= useState(null);
    const loaduserdata= async(uid) =>
    {
      try {
        const userRef= doc(db, "users", uid);
        const userSnap = await userRef.get();
        console.log(userSnap);
      } catch (error) {
        
      }
    }

    const value={
        userdata,
        setuserdata,
        chatdata,
        setchatdata,
        loaduserdata
    }
    return (
        <Appcontext.Provider value={value}>
            {props.children}
        </Appcontext.Provider>
    )
}
export default Appcontextprovider;