import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
    user?: {
        userId: string;
        email: string;
    };
}

interface TokenPayload {
    userId: string;
    email: string;
}

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
    // Get token from the "Authorization" header (Format: Bearer <token>)
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token using our secret key
        // We use 'as TokenPayload' to tell TypeScript the exact shape of the decoded data
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as TokenPayload;

        // Attach user data to the request object for the next function to use
        req.user = decoded;

        // Move to the next middleware or controller
        next();

    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token'});
    }

};