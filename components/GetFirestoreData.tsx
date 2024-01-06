import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { app } from './FirebaseConfig';


const db = getFirestore(app);

const getFirestoreData = async () => {
  try {
    const collectionRef = collection(db, 'SMDSEcommerce');
    const snapshot = await getDocs(collectionRef);
    const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    // Update your UI with the fetched data
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default getFirestoreData