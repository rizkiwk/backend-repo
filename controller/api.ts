import { Request, Response } from 'express';
import { setUser, fetchUser } from '../repository/userCollection';
import { User } from '../entities/user';

export const setUserData  = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const userPassword = req.body.password;
    const userData: User = req.body;

    try {
        await setUser(userId, userData, userPassword);
        res.status(200).send({ message: `User data updated successfully` });
    } catch (error) {
        res.status(500).send({ error: `Failed to updated user data` });
    }
};

export const fetchUserData  = async (req: Request, res: Response) => {
    const userId = req.params.id;
    
    try {
        const userData = await fetchUser(userId);
        if (userData) {
            res.status(200).send(userData);
        } else {
            res.status(404).send({ message: 'User  not found' });
        }
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch user data' });
    }
};