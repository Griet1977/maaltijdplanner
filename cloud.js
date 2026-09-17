import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore, doc, onSnapshot, runTransaction, setDoc, getDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";
const fb=initializeApp(firebaseConfig), auth=getAuth(fb), db=getFirestore(fb), ref=doc(db,"mealplanner","kloostertuin");
export const watchAuth=fn=>onAuthStateChanged(auth,fn);
export async function register(name,email,password){const c=await createUserWithEmailAndPassword(auth,email,password);await updateProfile(c.user,{displayName:name});return c.user}
export const login=(e,p)=>signInWithEmailAndPassword(auth,e,p);export const logout=()=>signOut(auth);
export function watchState(ok,fail){return onSnapshot(ref,s=>ok(s.exists()?s.data():null),fail)}
export async function ensureState(user,base){await runTransaction(db,async t=>{const s=await t.get(ref);if(!s.exists()){base.users={[user.uid]:{name:user.displayName||user.email.split('@')[0],email:user.email,active:true,admin:true}};base.updatedAt=serverTimestamp();t.set(ref,base)}else{const data=s.data();if(!data.users?.[user.uid])t.update(ref,{[`users.${user.uid}`]:{name:user.displayName||user.email.split('@')[0],email:user.email,active:true,admin:false},updatedAt:serverTimestamp()})}})}
export async function mutate(fn){await runTransaction(db,async t=>{const s=await t.get(ref);if(!s.exists())throw Error("Databank is nog niet gestart");const data=s.data();fn(data);data.updatedAt=serverTimestamp();t.set(ref,data)})}
