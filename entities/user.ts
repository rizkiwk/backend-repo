import { Timestamp } from "@firebase/firestore";

export interface User {
    fullname: string;
    totalAverageWeightRatings: number;
    numberOfRents: number;
    recentlyActive: Timestamp;
}