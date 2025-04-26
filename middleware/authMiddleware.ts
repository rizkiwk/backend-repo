export const authMiddleware = async (req: any, res: any, next: any) => {
    const paramToken = req.headers['authorization'] as string | undefined;

    if (!paramToken) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const bearerToken = paramToken.startsWith('Bearer ') ? paramToken.slice(7) : paramToken;

    if (bearerToken !== process.env.BEARER_TOKEN) {
        return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }

    next();
};