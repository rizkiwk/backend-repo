import { Timestamp } from "@firebase/firestore";

export interface User {
    email: string;
    fullname: string;
    totalAverageWeightRatings: number;
    numberOfRents: number;
    recentlyActive: Timestamp;
}