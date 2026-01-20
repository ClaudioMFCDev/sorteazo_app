import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient} from '@prisma/client';
import authRoutes from './routes/auth.routes.js';
import raffleRoutes from './routes/raffle.routes.js';
import prizeRoutes from './routes/prize.routes.js';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/raffles', raffleRoutes);
app.use('/api/prize', prizeRoutes);

// Ruta profesional
app.get('/health', (req, res)=> {
    res.json({ status: 'ok', message: 'Sorteazo API is running' });
});

app.listen(PORT, ()=> {
    console.log(`Server ready at http://localhost:${PORT}`);
});
