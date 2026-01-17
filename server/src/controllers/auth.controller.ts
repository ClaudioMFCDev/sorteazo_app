import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import * as userService from '../services/user.service.js';
import { json } from 'node:stream/consumers';

export const register = async (req: Request, res: Response) => {
    try {
        const { email, password, fullname} = req.body;

        // Valido si existe el usuario
        const existingUser = await userService.findUserByEmail(email);
        if(existingUser) {
            return res.status(400).json({message: 'User already exists'});
        }

        // Hasheo el password
        // con un salt level equilibrado de 10
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = await userService.createUser(email, passwordHash, fullname);

        res.status(201).json({ message: 'User registered successfully', user: {id: newUser.id, email: newUser.email}});


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Service Error'});
    }
};

export const login = async (req:Request, res: Response) => {
    try{
        const {email, password} = req.body;

        // Find user
        const user = await userService.findUserByEmail(email);

        if (!user) {
            return res.status(401).json( { message: "Invalid Credentials."});
        }
        
        // Compare Password
        const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash);

        if (!isPasswordCorrect) {
            return res.status(401).json( { message: "Invalid Credentials"});
        };
        
        // All is good? Generate token (jwt)
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET as string,
            {expiresIn: '1h'}
        );
        
        res.json({
            message: 'Login successful',
            token
        });

    } catch(error) {
        res.status(500).json({ message: "Internal server error"});
    };
};