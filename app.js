import express from 'express';

import { PORT } from './config/env.js';

import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import userRouter from './routes/user.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';
import arcjetMiddleware from './middlewares/arcjet.middleware.js';
import workflowRouter from './routes/workflow.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(arcjetMiddleware)

app.use('/api/vi/auth', authRouter);
app.use('/api/vi/subscriptions', subscriptionRouter);
app.use('/api/vi/users', userRouter);
app.use('/api/vi/workflows', workflowRouter);

app.use(errorMiddleware);

app.get('/', (req, res) =>
{
    res.send('Hello, Subscription Tracker!');
});

app.listen(PORT, async () =>
{
    console.log(`Subscription Tracker Server is running on port ${PORT}`);

    await connectToDatabase();
});

export default app;