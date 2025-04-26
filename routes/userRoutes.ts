import { Router } from 'express';
import { setUserData, fetchUserData } from '../controller/api';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router({ mergeParams: true });

// Add user data endpoint
router.post('/update-user-data', authMiddleware, setUserData);
router.post('/update-user-data/:id', authMiddleware, setUserData);

// Fetch user data endpoint
router.get('/fetch-user-data/', authMiddleware, fetchUserData);
router.get('/fetch-user-data/:id', authMiddleware, fetchUserData);

export default router;