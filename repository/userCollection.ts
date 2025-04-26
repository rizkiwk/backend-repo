import { db } from '../config/firebaseConfig';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { User } from '../entities/user';

const usersCollection = collection(db, 'USERS');

export const setUser = async (userId: string, userData: User) => {
    if (typeof userId === "string") {
        await setDoc(doc(usersCollection, userId), userData);
    } else {
        await setDoc(doc(usersCollection), userData);
    }
};

export const fetchUser = async (userId: string): Promise<User | null> => {
    const userDoc = doc(usersCollection, userId);
    const userSnapshot = await getDoc(userDoc);
    return userSnapshot.exists() ? (userSnapshot.data() as User) : null;
};