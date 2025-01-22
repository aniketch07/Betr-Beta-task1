import firebase_app from "../config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function getData(collection, id) {
  let result = null, error = null;
  const docRef = doc(db, collection, id);

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
// import { getFirestore, collection, getDocs } from "firebase/firestore";
// import firebase_app from "../config";

// const db = getFirestore(firebase_app);

// export default async function getAllData() {
//     const collectionRef = collection(db, "users");
//     let users = [];
//     let error = null;

//     try {
//         const querySnapshot = await getDocs(collectionRef);
//         querySnapshot.forEach((doc) => {
//             users.push({ id: doc.id, ...doc.data() });
//         });
//     } catch (e) {
//         error = e;
//     }

//     return { users, error };
// }
