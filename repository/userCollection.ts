import { db, auth } from '../config/firebaseConfig';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { User } from '../entities/user';

const usersCollection = collection(db, 'USERS');

export const setUser = async (userId: string, userData: User, userPassword: string) => {
    if (typeof userId === "string") {
        await setDoc(doc(usersCollection, userId), userData);
    } else {
        const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userPassword);
        await setDoc(doc(usersCollection, userCredential.user.uid), userData);
    }
};

export const fetchUser = async (userId: string): Promise<User | null> => {
    const userDoc = doc(usersCollection, userId);
    const userSnapshot = await getDoc(userDoc);
    return userSnapshot.exists() ? (userSnapshot.data() as User) : null;
};