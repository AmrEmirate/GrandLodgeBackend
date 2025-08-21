// src/app.ts
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express, { Application, Request, Response, NextFunction } from "express";
import passport from 'passport';

// Impor Konfigurasi
import './config/passport';

// Impor Router dari Feature 1 
import authRouter from './routers/auth.router';
import userRouter from './routers/user.router';
import categoryRouter from './routers/category.router';
import propertyRouter from './routers/property.router';

const PORT: string = process.env.PORT || "2020";

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.configure();
        this.routes();
        this.errorHandler();
    }

    private configure(): void {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(passport.initialize());
    }

    private routes(): void {
        // --- ROUTER UNTUK FEATURE 1 (ANDA) ---
        this.app.use('/api/auth', authRouter);
        this.app.use('/api/user', userRouter);
        this.app.use('/api/categories', categoryRouter);
        this.app.use('/api/properties', propertyRouter);

        // Rute dasar
        this.app.get("/", (req: Request, res: Response) => {
            res.status(200).send("<h1>Welcome to Final Project Grand Lodge</h1>");
        });
    }

    private errorHandler(): void {
        this.app.use((error: any, req: Request, res: Response, next: NextFunction) => {
            console.error(error);
            res.status(error.statusCode || 500).json({
                success: false,
                message: error.message || "Internal Server Error",
            });
        });
    }

    public start(): void {
        this.app.listen(PORT, () => {
            console.log(`Server is Running on http://localhost:${PORT}`);
        });
    }
}

export default App;