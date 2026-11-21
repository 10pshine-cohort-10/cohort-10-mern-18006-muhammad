import express, { type Application, type Request, type Response } from "express";
import cors from "cors";

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface ApiResponse<T = undefined> {
    success: boolean;
    message?: string;
    data?: T;
}

const app: Application = express();

// Middleware
app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

// Welcome route
app.get("/", (req: Request, res: Response<ApiResponse>) => {
    res.status(200).json({
        success: true,
        message: "Express backend is running!"
    });
});

// Users API
app.get("/api/users", (req: Request, res: Response<ApiResponse<User[]>>) => {
    const users: User[] = [
        {
            id: 1,
            name: "Ali",
            email: "ali@example.com"
        },
        {
            id: 2,
            name: "Ahmed",
            email: "ahmed@example.com"
        }
    ];

    res.status(200).json({
        success: true,
        data: users
    });
});

export default app;
