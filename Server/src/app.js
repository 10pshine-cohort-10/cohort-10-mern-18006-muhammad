
import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

// Welcome route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Express backend is running!"
    });
});

// Users API
app.get("/api/users", (req, res) => {
    const users = [
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
